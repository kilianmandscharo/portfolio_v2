import { PropsWithChildren } from "react";

export default function P({ children }: PropsWithChildren<unknown>) {
  return <p className="mb-4 leading-7">{children}</p>;
}
