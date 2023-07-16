interface Props {
  children: string;
}

export default function H1({ children }: Props) {
  return <h1 className="text-3xl">{children}</h1>;
}
