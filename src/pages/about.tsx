import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
// import SectionChecklist from "@/components/sections/section-checklist";
import SectionStats from "@/components/sections/section-stats";
import SectionTeam from "@/components/sections/section-team";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import { Helmet } from "react-helmet";
import Paragraph from "@/components/Paragraph";

const About = useFramerTransition(
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle>About</SectionPageTitle>
      <Paragraph />
      {/* <SectionChecklist /> */}
      <SectionStats />
      {/* <SectionTeam /> */}
      <SectionCTALayout4 />
    </main>
  </>,
);

export default About;
