import BackgroundSection from "@/sections/background/BackgroundSection";
import ContactSection from "@/sections/contact/ContactSection";
import ExperienceSection from "@/sections/experience/ExperienceSection";
import Hero from "@/sections/hero/Hero";
import OpenSourceSection from "@/sections/open-source/OpenSourceSection";
import RecommendationsSection from "@/sections/recommendations/RecommendationsSection";
import WorkSection from "@/sections/work/WorkSection";
import WritingSection from "@/sections/writing/WritingSection";

/** The whole site is one page: these sections, top to bottom, in the order of content/sections.ts. */
export default function Home() {
  return (
    <main id="top">
      <Hero />
      <WorkSection />
      <OpenSourceSection />
      <WritingSection />
      <ExperienceSection />
      <RecommendationsSection />
      <BackgroundSection />
      <ContactSection />
    </main>
  );
}
