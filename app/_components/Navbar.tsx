"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const pages = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "CV", path: "/cv" },
  { name: "Music", path: "/music" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center sticky top-0 bg-dark-700 p-4 border-b border-b-slate-700 shadow-md z-50">
      <div className="flex justify-between max-w-[1024px] w-full px-4">
        {pages.map((p) => (
          <NavItem
            key={p.name}
            name={p.name}
            path={p.path}
            active={pathname === p.path}
          />
        ))}
      </div>
    </nav>
  );
}
