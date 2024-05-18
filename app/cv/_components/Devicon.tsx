import Image from "next/image";

interface Props {
  src: string;
  label: string;
}

export default function Devicon({ src, label }: Props) {
  return (
    <div className="flex text-sm items-center gap-4 py-2 px-2 md:px-4 rounded-md bg-dark-700">
      <Image alt={`devicon ${label}`} width={32} height={32} src={src} />
      <p>{label}</p>
    </div>
  );
}
