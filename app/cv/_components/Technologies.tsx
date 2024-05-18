import H2 from "@/app/_components/H2";
import H3 from "@/app/_components/H3";
import { Fragment } from "react";
import Devicon from "./Devicon";

const technologies = {
  Browser: [
    {
      label: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      label: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      label: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      label: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      label: "Next",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ],
  Server: [
    {
      label: "Node",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      label: "Go",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    },
    {
      label: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      label: "Rust",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    },
    {
      label: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      label: "SQLite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
  ],
  Tools: [
    {
      label: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      label: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      label: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      label: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ],
};

export default function Technologies() {
  return (
    <div>
      <H2 showBorder mb="mb-6">Technologies</H2>
      <div className="flex flex-col gap-4">
        {Object.entries(technologies).map(([name, list]) => (
          <div key={name}>
            <H3>{name}</H3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {list.map((item) => (
                <Fragment key={item.label}>
                  <Devicon label={item.label} src={item.src} />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
