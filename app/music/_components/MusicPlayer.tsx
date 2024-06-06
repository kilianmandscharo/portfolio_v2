"use client";

import {
  FaPlay,
  FaForwardStep,
  FaBackwardStep,
  FaPause,
} from "react-icons/fa6";
import useMusicPlayer, { Tracks } from "../_hooks/useMusicPlayer";
import Slider from "./Slider";

interface MusicPlayerProps {
  tracks: Tracks;
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const {
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
  } = useMusicPlayer(tracks);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {Object.entries(tracks).map(([id, track]) => (
          <div
            key={id}
            className={`p-4 w-fit bg-dark-700 rounded cursor-pointer border-2 ${selected === id ? "border-blue-400" : "border-transparent"}`}
            onClick={() => onSelectedChange(id)}
          >
            {track.name}
          </div>
        ))}
      </div>
      <div className="mt-4 border border-white p-4 rounded flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
          <FaBackwardStep className="cursor-pointer" size={24} />
          {state === "playing" ? (
            <FaPause className="cursor-pointer" onClick={pause} size={24} />
          ) : (
            <FaPlay className="cursor-pointer" onClick={play} size={24} />
          )}
          <FaForwardStep className="cursor-pointer" size={24} />
        </div>
        <div>{currentlyPlaying || "No track selected"}</div>
        <div>
          {progressFormatted} / {totalDurationFormatted}
        </div>
        <Slider
          min={0}
          max={totalDurationInSeconds}
          value={progressInSeconds}
          onValueChange={() => null}
        />
      </div>
    </div>
  );
}
