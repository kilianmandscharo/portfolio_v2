import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex justify-center gap-8 py-4 border-t border-t-slate-500">
      <Link href="/imprint">Imprint</Link>
      <Link href="/privacy-notice">Privacy Notice</Link>
    </div>
  );
}
