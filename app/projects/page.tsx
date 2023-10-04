import H1 from "@/app/_components/H1";
import Project from "./_components/Project";

export default function Projects() {
  return (
    <>
      <H1>Projects</H1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Project
          name="Visualizing Algorithms"
          img="/images/algorithms.jpg"
          links={[
            {
              name: "Website",
              url: "https://visualize-algorithms.netlify.app",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/visualize_algorithms",
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
          name="Work Hours CLI app"
          img="/images/work_hours.jpg"
          links={[
            {
              name: "GitHub server",
              url: "https://github.com/kilianmandscharo/work_hours",
            },
            {
              name: "GitHub CLI app",
              url: "https://github.com/kilianmandscharo/work_hours_cli",
            },
          ]}
        />
        <Project
          name="Wortspiel"
          img="/images/wortspiel.jpg"
          links={[
            {
              name: "Website",
              url: "https://wortspiel.netlify.app/",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/wortspiel",
            },
          ]}
        />
        <Project
          name="Musikgym"
          img="/images/notes.jpg"
          links={[
            {
              name: "Website",
              url: "https://musikgym.netlify.app/",
            },
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/music_training",
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
          name="Snake"
          img="/images/snake.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/snake",
            },
          ]}
        />
        <Project
          name="Visualizing Algorithms 2"
          img="/images/algorithms_2.jpg"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/kilianmandscharo/algovis",
            },
          ]}
        />
      </div>
    </>
  );
}
