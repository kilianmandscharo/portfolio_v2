import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between sticky top-0 bg-slate-800 py-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/cv">CV</Link>
      <Link href="/music">Music</Link>
    </nav>
  );
}
