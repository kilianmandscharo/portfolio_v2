import H1 from "@/app/_components/H1";
import Project from "./_components/Project";

export default function Projects() {
  return (
    <>
      <H1>Projects</H1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Project
          name="Let Him Cook – Recipes"
          img="/images/lethimcook.jpg"
          links={[
            {
              name: "Website",
              url: "https://let-him-cook.de/",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/lethimcook",
            },
          ]}
        />
        <Project
          name="Visualizing Algorithms"
          img="/images/algorithms.jpg"
          links={[
            {
              name: "Website",
              url: "https://visualize-algorithms.pages.dev",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/visualize_algorithms",
            },
          ]}
        />
        <Project
          name="Ascii Image Converter"
          img="/images/ascii_image.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/ascii_image",
            },
          ]}
        />
        <Project
          name="Musikgym"
          img="/images/notes.jpg"
          links={[
            {
              name: "Website",
              url: "https://music-training.pages.dev",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/music_training",
            },
          ]}
        />
        <Project
          name="Monkey Interpreter"
          img="/images/monkey.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/monkey"
            },
          ]}
        />
        <Project
          name="Random Text Generator"
          img="/images/jumbler.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/jumbler",
            },
          ]}
        />
        <Project
          name="Runner App"
          img="/images/runner.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/running_app",
            },
          ]}
        />
        <Project
          name="Todo CLI app"
          img="/images/todo.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/todo",
            },
          ]}
        />
        <Project
          name="Wortspiel"
          img="/images/wortspiel.jpg"
          links={[
            {
              name: "Website",
              url: "https://wortspiel.pages.dev/",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/wortspiel",
            },
          ]}
        />
      </div>
    </>
  );
}
