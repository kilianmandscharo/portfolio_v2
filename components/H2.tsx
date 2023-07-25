interface Props {
  children: string;
}

export default function H2({ children }: Props) {
  return <h1 className="text-2xl">{children}</h1>;
}
