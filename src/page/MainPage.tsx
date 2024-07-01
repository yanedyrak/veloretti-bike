import { HeroSection } from "../shared/ui/sections/HeroSection/HeroSection";
import { AboutSection } from "../shared/ui/sections/AboutSection/AboutSection";
import { TextSection } from "../shared/ui/sections/TextSection/TextSection";

import { Accordion } from "../widgets/accordion/Accordion";

export const MainPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TextSection />
      <Accordion />
    </>
  );
};
