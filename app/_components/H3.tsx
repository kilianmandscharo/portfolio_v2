interface Props {
  children: string;
}

export default function H3({ children }: Props) {
  return <h3 className="text-lg mb-4 font-bold">{children}</h3>;
}
