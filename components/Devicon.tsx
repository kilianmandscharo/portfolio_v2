interface Props {
  src: string;
  label: string;
  skill: 1 | 2 | 3;
}

export default function Devicon({ src, label, skill }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-8 md:w-16" src={src} />
        <p>{label}</p>
      </div>
      <div className="flex gap-2">
        <div
          className={`bg-orange-300 rounded-full w-6 h-6 border-2 border-orange-300`}
        />
        <div
          className={`${
            skill > 1 && "bg-orange-300"
          } rounded-full w-6 h-6 border-2 border-orange-300`}
        />
        <div
          className={`${
            skill > 2 && "bg-orange-300"
          } rounded-full w-6 h-6 border-2 border-orange-300`}
        />
      </div>
    </div>
  );
}
