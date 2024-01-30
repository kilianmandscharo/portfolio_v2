import Link from "next/link";

interface Props {
  name: string;
  path: string;
  active: boolean;
}

export default function FooterItem({ name, path, active }: Props) {
  return (
    <Link
      className={`border-b font-body ${
        active
          ? "text-primary-400 border-b-primary-400"
          : "text-white border-b-transparent"
      }`}
      href={path}
    >
      {name}
    </Link>
  );
}
