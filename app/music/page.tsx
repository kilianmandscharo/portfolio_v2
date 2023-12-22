import H1 from "@/app/_components/H1";
import H2 from "@/app/_components/H2";

export default function Music() {
  return (
    <>
      <H1>Music</H1>
      <div className="flex flex-col gap-8">
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
      </div>
    </>
  );
}
