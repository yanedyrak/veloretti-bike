import { HeroSection } from "../shared/ui/sections/HeroSection/HeroSection";
import { AboutSection } from "../shared/ui/sections/AboutSection/AboutSection";
import { TextSection } from "../shared/ui/sections/TextSection/TextSection";

import { Accordion } from "../widgets/accordion/Accordion";
import { Contact } from "../widgets/contact/Contact";
import { Products } from "../widgets/products/Products";

export const MainPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TextSection />
      <Products />
      <Contact />
      <Accordion />
    </>
  );
};
