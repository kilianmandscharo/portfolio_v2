import H2 from "@/app/_components/H2";
import LanguageItem from "./LanguageItem";

export default function Languages() {
  return (
    <div>
      <H2 showBorder mb="mb-6">Languages</H2>
      <div className="grid gap-4 leading-7 md:grid-cols-2">
        <LanguageItem language="German" proficiency="Native language" />
        <LanguageItem language="English" proficiency="C2" />
        <LanguageItem language="French" proficiency="B1" />
        <LanguageItem language="Spanish" proficiency="A2" />
      </div>
    </div>
  );
}
