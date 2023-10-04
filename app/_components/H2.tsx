interface Props {
  children: string;
}

export default function H2({ children }: Props) {
  return <h2 className="text-2xl font-bold font-body mb-4">{children}</h2>;
}
