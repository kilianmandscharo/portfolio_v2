interface Props {
  children: string;
}

export default function H1({ children }: Props) {
  return (
    <h1 className="text-5xl text-primary-300 font-header mb-8">{children}</h1>
  );
}
