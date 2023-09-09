import H2 from "@/components/H2";
import LanguageItem from "./LanguageItem";

export default function Languages() {
  return (
    <div>
      <H2>Languages</H2>
      <div className="grid gap-4 md:gap-8 leading-7 md:grid-cols-2">
        <LanguageItem language="German" proficiency="native language" />
        <LanguageItem language="English" proficiency="C2" />
        <LanguageItem language="French" proficiency="B1" />
        <LanguageItem language="Spanish" proficiency="A2" />
      </div>
    </div>
  );
}
