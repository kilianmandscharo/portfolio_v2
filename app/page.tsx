import H1 from "@/components/H1";
import P from "@/components/P";

export default function Home() {
  return (
    <main>
      <H1>Dominik Heller</H1>
      <div className="md:columns-2 gap-x-8">
        <P>
          My name is Dominik. I like writing software, with a main interest in
          full-stack web development.
        </P>
        <P>
          During my time in the Media Studies master's program at the{" "}
          <span className="italic">University of Regensburg</span>, I found my
          way into programming – mainly through taking university classes on the
          subject and doing a lot of self-teaching in conjunction.
          Simultaneously, I was learning about digital computers from a
          theoretical perspective, about their fundamental workings, early
          history and present as well as their future potential in the form of
          AI. As a result, my studies were all about this kind of feedback loop
          between the theoretical and practical – where new knowledge on one
          side leads to a greater interest in the other and vice versa. After
          completing my studies with a thesis about learning machines, mostly
          focusing on the history of Cybernetics and Deep Learning, I left
          university with a master's degree and a solid foundation in
          programming.
        </P>
        <P>
          Coming out of university, I landed a job at{" "}
          <span className="italic">Synsor.ai GmbH</span>, where I worked on an
          application for AI-based visual quality inspection as a full-stack
          software developer.
        </P>
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
    </main>
  );
}
