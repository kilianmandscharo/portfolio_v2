interface Props {
  children: string;
}

export default function H3({ children }: Props) {
  return <h1 className="text-xl">{children}</h1>;
}
