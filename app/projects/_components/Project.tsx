"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  name: string;
  img: string;
  links: { name: string; url: string }[];
}

export default function Project({ name, img, links }: Props) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    if (hovered) return;

    setActive(!active);
  };

  return (
    <div className="bg-dark-700 rounded-md p-4 flex flex-col justify-between items-center gap-4">
      <p className="text-xl">{name}</p>
      <div
        className="relative max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <Image
          className="border border-secondary-300 rounded-sm"
          width="250"
          height="250"
          src={img}
          alt={`project ${name}`}
        />
        {(hovered || active) && (
          <div className="animate-appear flex flex-col justify-center items-center gap-2 absolute top-0 left-0 bottom-0 right-0 bg-dark-700/50">
            {links.map((l) => (
              <div key={l.name} className="p-2 rounded-md bg-dark-700">
                <a href={l.url}>{l.name}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
