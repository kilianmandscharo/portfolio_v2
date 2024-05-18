import H2 from "@/app/_components/H2";
import CVItem from "./CVItem";

export default function Education() {
  return (
    <div>
      <H2 showBorder mb="mb-6">
        Education
      </H2>
      <div className="flex flex-col gap-4">
        <CVItem
          period="10/2019 - 03/2022"
          institution="University of Regensburg"
          header="Media Studies with accompanying IT-certificate"
          text="Degree: Master of Arts (1,0) - Thesis on Cybernetics, AI and Deep Learning"
        />
        <CVItem
          period="09/2015 - 03/2019"
          institution="University of Regensburg"
          header="Media Studies and American Studies"
          text="Degree: Bachelor of Arts (1,4)"
        />
        <CVItem
          period="09/2006 - 07/2014"
          institution="Joseph-Bernhart Gymnasium Türkheim"
          header="Math and science focus"
          text="Degree: Abitur (2,1)"
        />
      </div>
    </div>
  );
}
