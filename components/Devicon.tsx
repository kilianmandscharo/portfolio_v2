interface Props {
  src: string;
  label: string;
}

export default function Devicon({ src, label }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-8 md:w-16" src={src} />
        <p>{label}</p>
      </div>
    </div>
  );
}
