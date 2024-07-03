import { AboutSection } from "../shared/ui/sections/AboutSection/AboutSection";
import { TextSection } from "../shared/ui/sections/TextSection/TextSection";

import { Accordion } from "../widgets/accordion/Accordion";
import { Contact } from "../widgets/contact/Contact";
import { Products } from "../widgets/products/Products";
import img from "../shared/ui/sections/MainLayout/HeroSection.jpg";
import { MainLayout } from "../shared/ui/sections/MainLayout/MainLayout";
export const MainPage = () => {
  return (
    <>
      <MainLayout img={img} mainText="Bike lease plan for employees." />
      <AboutSection />
      <TextSection />
      <Products />
      <Contact />
      <Accordion />
    </>
  );
};
