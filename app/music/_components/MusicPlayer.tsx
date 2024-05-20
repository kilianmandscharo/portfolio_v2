"use client";

import { formatTime, getTimeFromSeconds } from "@/app/_utils/utils";
import { useRef, useState } from "react";
import {
  FaPlay,
  FaForwardStep,
  FaBackwardStep,
  FaPause,
} from "react-icons/fa6";

interface Track {
  src: string;
  name: string;
}

type Tracks = Record<string, Track>;

interface CurrentTrack {
  id: string;
  source: AudioBufferSourceNode;
  state: "playing" | "stopped";
  progress: number;
  totalDuration: number;
}

interface MusicPlayerProps {
  tracks: Tracks;
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [selected, setSelected] = useState<string>("1");
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null);

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
      setCurrentTrack((prev) =>
        prev ? { ...prev, progress: prev.progress + 1 } : prev,
      );
    }, 1000);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
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
      setCurrentTrack({
        id: selected,
        source,
        state: "playing",
        progress: 0,
        totalDuration: buffer.duration,
      });

      source.start();
    } else {
      setCurrentTrack({
        ...currentTrack,
        source,
        state: "playing",
      });

      source.start(0, currentTrack?.progress);
    }

    stopTimer();
    startTimer();
  };

  const pause = () => {
    if (currentTrack) {
      currentTrack.source.stop();
      setCurrentTrack({ ...currentTrack, state: "stopped" });
      stopTimer();
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {Object.entries(tracks).map(([id, track]) => (
          <div
            key={id}
            className={`p-4 w-fit bg-dark-700 rounded cursor-pointer border-2 ${selected === id ? "border-blue-400" : "border-transparent"}`}
            onClick={() => setSelected(id)}
          >
            {track.name}
          </div>
        ))}
      </div>
      <div className="mt-4 border border-white p-4 rounded w-fit flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
          <FaBackwardStep className="cursor-pointer" size={24} />
          {currentTrack?.state === "playing" ? (
            <FaPause className="cursor-pointer" onClick={pause} size={24} />
          ) : (
            <FaPlay className="cursor-pointer" onClick={play} size={24} />
          )}
          <FaForwardStep className="cursor-pointer" size={24} />
        </div>
        {currentTrack && <div>{tracks[currentTrack.id].name}</div>}
        {currentTrack && (
          <div>
            {formatTime(getTimeFromSeconds(currentTrack.progress))} /{" "}
            {formatTime(
              getTimeFromSeconds(Math.round(currentTrack.totalDuration)),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
