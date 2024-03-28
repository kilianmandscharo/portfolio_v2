interface Props {
  children: string;
}

export default function H2WithChildren({ children }: Props) {
  return (
    <div className="flex items-center gap-2 mb-1 mt-8">
      <div className="rounded-full w-3 h-3 bg-primary-300 mb-[3px]" />
      <h2 className="text-2xl font-bold font-body">{children}</h2>
    </div>
  );
}
