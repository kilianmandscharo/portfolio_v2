import H1 from "@/app/_components/H1";
import Education from "./_components/Education";
import WorkExperience from "./_components/WorkExperience";
import Languages from "./_components/Languages";
import Technologies from "./_components/Technologies";

export default function CV() {
  return (
    <>
      <H1>CV</H1>
      <div className="grid gap-12">
        <WorkExperience />
        <Education />
        <Technologies />
        <Languages />
      </div>
    </>
  );
}
