interface Props {
  language: string;
  proficiency: string;
}

export default function LanguageItem({ language, proficiency }: Props) {
  return (
    <div className="flex flex-col justify-center bg-dark-700 py-2 px-4 rounded-md">
      <p className="font-bold text-secondary-300">{language}</p>
      <p>{proficiency}</p>
    </div>
  );
}
