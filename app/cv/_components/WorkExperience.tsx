import H2 from "@/app/_components/H2";
import CVItem from "./CVItem";

export default function WorkExperience() {
  return (
    <div>
      <H2>Work Experience</H2>
      <div className="flex flex-col gap-6">
        <CVItem
          period="01/2024 - today"
          institution="One Unity Consulting GmbH & Co. KG"
          header="Junior Software Developer"
          points={[
            "Application-development in the context of DMS and ECM",
          ]}
        />
        <CVItem
          period="05/2022 - 09/2023"
          institution="Synsor.ai GmbH"
          header="Junior Software Developer"
          points={[
            "Fullstack-development on a visual AI application for industrial quality inspection",
          ]}
        />
        <CVItem
          period="07/2019 - 09/2019"
          institution="Landsberger Tagblatt"
          header="Editorial internship"
          points={["Researching for and writing newspaper articles"]}
        />
        <CVItem
          period="07/2018 - 10/2018"
          institution="Evoluzione Media AG"
          header="Editorial internship"
          points={[
            "Producing magazine and website content",
            "Customer acquisition",
          ]}
        />
      </div>
    </div>
  );
}
