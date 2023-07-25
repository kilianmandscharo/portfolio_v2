import Devicon from "@/components/Devicon";
import H2 from "@/components/H2";
import H3 from "@/components/H3";

export default function Technologies() {
  return (
    <div className="flex flex-col gap-4">
      <H2>Technologies</H2>
      <H3>Browser</H3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-32">
        <Devicon
          label="TypeScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          skill={3}
        />
        <Devicon
          label="JavaScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          skill={3}
        />
        <Devicon
          label="React"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          skill={3}
        />
        <Devicon
          label="Next"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
          skill={2}
        />
        <Devicon
          label="HTML"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          skill={3}
        />
        <Devicon
          label="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          skill={3}
        />
        <Devicon
          label="Tailwind CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          skill={2}
        />
      </div>
      <H3>Server</H3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-32">
        <Devicon
          label="Python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          skill={2}
        />
        <Devicon
          label="Go"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
          skill={2}
        />
        <Devicon
          label="Node"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          skill={2}
        />
        <Devicon
          label="PostgreSQL"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          skill={2}
        />
      </div>
      <H3>System</H3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-32">
        <Devicon
          label="Rust"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
          skill={1}
        />
        <Devicon
          label="C"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          skill={1}
        />
      </div>
      <H3>Tools</H3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-32">
        <Devicon
          label="Linux"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          skill={2}
        />
        <Devicon
          label="Figma"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          skill={2}
        />
        <Devicon
          label="Git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          skill={2}
        />
        <Devicon
          label="Docker"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          skill={1}
        />
      </div>
    </div>
  );
}
