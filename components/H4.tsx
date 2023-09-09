interface Props {
  children: string;
}

export default function H4({ children }: Props) {
  return <h3 className="mb-4 font-bold">-- {children} --</h3>;
}
