import H1 from "@/app/_components/H1";
import MusicPlayer from "@/app/music/_components/MusicPlayer";

const tracks = {
  1: {
    src: "/music/christmas_prelude_c_minor.mp3",
    name: "Prelude in C minor",
  },
  2: {
    src: "/music/christmas_prelude_d_minor.mp3",
    name: "Prelude in D minor",
  },
};

export default function Music() {
  return (
    <>
      <H1>Music</H1>
      <MusicPlayer tracks={tracks} />
      {/*<div className="flex flex-col gap-8">
        <div>
          <H2>Prelude to Christmas (2022)</H2>
          <audio controls className="rounded-lg">
            <source src="/music/christmas_prelude_c_minor.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <H2>Prelude to Christmas (2023)</H2>
          <audio controls className="rounded-lg">
            <source src="/music/christmas_prelude_d_minor.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>*/}
    </>
  );
}
