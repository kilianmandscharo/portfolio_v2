import P from "@/app/_components/P";
import H2WithCircle from "@/app/_components/H2WithCircle";

export default function About() {
  return (
    <div className="md:columns-2 gap-x-8">
      <P>
        My name is Dominik. I like writing software, with a main interest in
        full-stack web development.
      </P>
      <H2WithCircle>Education</H2WithCircle>
      <P>
        During my time in the Media Studies master&apos;s program at the
        <span className="italic"> University of Regensburg</span>, I found my
        way into programming – mainly through taking university classes on the
        subject and doing a lot of self-teaching in conjunction. Simultaneously,
        I was learning about digital computers from a theoretical perspective,
        about their fundamental workings, their early history and their present
        as well as future potential in the form of AI. As a result, my studies
        were all about this kind of feedback loop between the theoretical and
        practical – where new knowledge on one side leads to a greater interest
        in the other and vice versa. After completing my studies with a thesis
        about learning machines, mostly focusing on the history of Cybernetics
        and Deep Learning, I left university with a master&apos;s degree and a
        solid foundation in programming.
      </P>
      <H2WithCircle>Work</H2WithCircle>
      <P>
        Coming out of university, I landed a job at{" "}
        <span className="italic">Synsor.ai GmbH</span>, where I worked on an
        application for AI-based visual quality inspection as a junior
        full-stack web developer.
      </P>
      <P>
        Currently I am working as a Junior Software Developer at{" "}
        <a
          className="underline decoration-primary-300"
          href="https://one-unity.de/"
        >
          <span className="italic">One Unity</span>
        </a>
        .
      </P>
      <H2WithCircle>What I do in my free time</H2WithCircle>
      <P>
        Since I got into programming, I also finished a few private projects,
        some of which I want to display on this page.
      </P>
      <P>
        When I am not programming, I like to – among other things – play,
        compose and record music, some of which will also be exhibited on this
        website.
      </P>
    </div>
  );
}
