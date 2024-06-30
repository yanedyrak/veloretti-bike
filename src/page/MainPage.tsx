import { Navbar } from "../widgets/navbar/Navbar";
import { HeroSection } from "../shared/ui/sections/HeroSection/HeroSection";
import { AboutSection } from "../shared/ui/sections/AboutSection/AboutSection";
import { TextSection } from "../shared/ui/sections/TextSection/TextSection";
import { Footer } from "../widgets/footer/Footer";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TextSection />
      <Footer />
    </>
  );
};
