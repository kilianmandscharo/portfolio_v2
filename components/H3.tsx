interface Props {
  children: string;
}

export default function H3({ children }: Props) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-[6px] h-[6px] rounded-full bg-secondary-300" />
      <h3 className="text-xl font-semibold">{children}</h3>
    </div>
  );
}
