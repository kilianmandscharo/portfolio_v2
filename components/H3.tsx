interface Props {
  children: string;
}

export default function H3({ children }: Props) {
  return <h3 className="text-xl mb-4 font-semibold italic">{children}</h3>;
}
