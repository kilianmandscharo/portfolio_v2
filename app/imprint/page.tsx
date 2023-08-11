import H1 from "@/components/H1";
import H2 from "@/components/H2";

export default function Imprint() {
  return (
    <>
      <H1>Imprint</H1>
      <div className="mb-8">
        <H2>Contact</H2>
        <p>[Name]</p>
        <p>[Street]</p>
        <p>[Address]</p>
        <p>[Phone]</p>
        <p>[E-Mail]</p>
      </div>
      <div className="mb-8">
        <H2>Liability for links</H2>
        <p>
          Our offer contains links to external websites of third parties, on
          whose contents we have no influence. Therefore, we cannot assume any
          liability for these external contents. The respective provider or
          operator of the pages is always responsible for the content of the
          linked pages. The linked pages were checked for possible legal
          violations at the time of linking. Illegal contents were not
          recognizable at the time of linking. However, a permanent control of
          the contents of the linked pages is not reasonable without concrete
          evidence of a violation of the law. If we become aware of any
          infringements, we will remove such links immediately.
        </p>
      </div>
      <div>
        <H2>Copyright</H2>
        <p>
          The content and works created by the site operators on these pages are
          subject to German copyright law. Duplication, processing,
          distribution, or any form of commercialization of such material beyond
          the scope of the copyright law shall require the prior written consent
          of its respective author or creator. Downloads and copies of this site
          are only permitted for private, non-commercial use. Insofar as the
          content on this site was not created by the operator, the copyrights
          of third parties are respected. In particular, third-party content is
          identified as such. Should you nevertheless become aware of a
          copyright infringement, please inform us accordingly. If we become
          aware of any infringements, we will remove such content immediately.
        </p>
      </div>
    </>
  );
}
