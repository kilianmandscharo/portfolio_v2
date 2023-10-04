import H1 from "@/app/_components/H1";
import H2 from "@/app/_components/H2";

export default function Music() {
  return (
    <>
      <H1>Music</H1>
      <H2>Prelude to Christmas</H2>
      <audio controls>
        <source src="/music/christmas_prelude_c_minor.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
