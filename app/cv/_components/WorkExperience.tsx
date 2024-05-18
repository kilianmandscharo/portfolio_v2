import H2 from "@/app/_components/H2";
import CVItem from "./CVItem";

export default function WorkExperience() {
  return (
    <div>
      <H2 showBorder mb="mb-6">
        Work Experience
      </H2>
      <div className="flex flex-col gap-4">
        <CVItem
          period="01/2024 - today"
          institution="One Unity Consulting GmbH & Co. KG"
          header="Junior Software Developer"
          text="Application-development in the context of DMS and ECM"
        />
        <CVItem
          period="05/2022 - 09/2023"
          institution="Synsor.ai GmbH"
          header="Junior Software Developer"
          text="Fullstack-development on a visual AI application for industrial quality inspection"
        />
      </div>
    </div>
  );
}
