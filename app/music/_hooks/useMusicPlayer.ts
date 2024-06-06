import { formatTime, getTimeFromSeconds } from "@/app/_utils/utils";
import { useMemo, useRef, useState } from "react";

interface Track {
  src: string;
  name: string;
}

export type Tracks = Record<string, Track>;

interface CurrentTrack {
  id: string;
  source: AudioBufferSourceNode;
  state: "playing" | "stopped";
  startedAt: Date;
  stoppedAt: Date;
  totalDuration: number;
}

export default function useMusicPlayer(tracks: Tracks): {
  play: () => void;
  pause: () => void;
  state: CurrentTrack["state"] | null;
  currentlyPlaying: string;
  progressInSeconds: number;
  progressFormatted: string;
  totalDurationInSeconds: number;
  totalDurationFormatted: string;
  selected: string;
  onSelectedChange: (id: string) => void;
} {
  const [selected, setSelected] = useState<string>("1");
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null);
  const [_, setTrigger] = useState<boolean>(false);

  const ctx = useRef<AudioContext>(new AudioContext());
  const buffers = useRef<Record<string, AudioBuffer>>({});

  const timer = useRef<NodeJS.Timer>();

  const loadTrack = async (id: string) => {
    const res = await fetch(tracks[id].src);

    const arrayBuffer = await res.arrayBuffer();
    const audioBuffer = await ctx.current.decodeAudioData(arrayBuffer);

    buffers.current[id] = audioBuffer;
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 1000);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const onSelectedChange = (id: string) => {
    setSelected(id);
  };

  const play = async () => {
    if (!buffers.current[selected]) {
      await loadTrack(selected);
    }

    const buffer = buffers.current[selected];
    if (!buffer) {
      return;
    }

    const source = ctx.current.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.current.destination);

    if (selected !== currentTrack?.id) {
      const now = new Date();
      setCurrentTrack({
        id: selected,
        source,
        state: "playing",
        startedAt: now,
        stoppedAt: now,
        totalDuration: Math.round(buffer.duration),
      });

      source.onended = pause;
      source.start();
    } else {
      setCurrentTrack({
        ...currentTrack,
        source,
        state: "playing",
      });

      source.start(
        0,
        (currentTrack.stoppedAt.getTime() - currentTrack.startedAt.getTime()) /
          1000,
      );
    }

    stopTimer();
    startTimer();
  };

  const pause = () => {
    if (currentTrack) {
      currentTrack.source.stop();
      setCurrentTrack((prev) =>
        prev
          ? {
              ...prev,
              state: "stopped",
              stoppedAt: new Date(),
            }
          : prev,
      );
      stopTimer();
    }
  };

  const currentlyPlaying = currentTrack ? tracks[currentTrack.id].name : "";

  const state = currentTrack ? currentTrack.state : null;

  const totalDurationInSeconds = currentTrack?.totalDuration ?? 0;
  const totalDurationFormatted = useMemo(
    () => formatTime(getTimeFromSeconds(totalDurationInSeconds)),
    [currentTrack],
  );

  const progressInSeconds = currentTrack
    ? Math.round(
        (new Date().getTime() - currentTrack.startedAt.getTime()) / 1000,
      )
    : 0;

  const progressFormatted = useMemo(
    () =>
      currentTrack
        ? formatTime(getTimeFromSeconds(progressInSeconds))
        : formatTime(getTimeFromSeconds(0)),
    [currentTrack, progressInSeconds],
  );

  return {
    play,
    pause,
    state,
    currentlyPlaying,
    progressInSeconds,
    progressFormatted,
    totalDurationInSeconds,
    totalDurationFormatted,
    selected,
    onSelectedChange,
  };
}
