interface Props {
  period: string;
  institution: string;
  header?: string;
  text?: string;
}

export default function CVItem({ period, institution, header, text }: Props) {
  return (
    <div className="flex justify-between gap-8">
      <div>
        <p className="font-bold text-lg text-secondary-300 mb-2">
          {institution} - {header ?? ""}
        </p>
        <p className="font-light">{text ?? ""}</p>
      </div>
      <div>
        <p className="font-thin text-white">{period}</p>
      </div>
    </div>
  );
}
