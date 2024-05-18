interface Props {
  children: string;
  showBorder?: boolean;
  mb?: string;
}

export default function H2({ children, showBorder, mb }: Props) {
  return (
    <h2
      className={`text-2xl font-bold font-body w-fit ${mb ?? "mb-4"} ${showBorder ? "border border-white py-2 px-4 rounded-lg" : ""}`}
    >
      {children}
    </h2>
  );
}
