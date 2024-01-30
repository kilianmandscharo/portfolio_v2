"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const footerItems = [
  { name: "Imprint", path: "/imprint" },
  { name: "Privacy Notice", path: "/privacy-notice" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center gap-8 py-4">
      {footerItems.map((f) => (
        <NavItem
          key={f.name}
          name={f.name}
          path={f.path}
          active={pathname === f.path}
        />
      ))}
    </div>
  );
}
