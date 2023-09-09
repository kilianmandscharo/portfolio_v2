interface Props {
  period: string;
  institution: string;
  header?: string;
  points?: string[];
}

export default function CVItem({ period, institution, header, points }: Props) {
  return (
    <div className="grid gap-4 md:gap-8 leading-7 md:grid-cols-2">
      <div className="flex flex-col justify-center bg-dark-700 py-2 px-4 rounded-md">
        <p className="font-bold text-secondary-300">{institution}</p>
        <p>{period}</p>
      </div>
      <div className="py-2 px-4">
        {header !== undefined && <p className="text-primary-300">{header}</p>}
        {points?.map((p) => (
          <p key={p}>
            <span className="text-primary-300">•</span> {p}
          </p>
        ))}
      </div>
    </div>
  );
}
