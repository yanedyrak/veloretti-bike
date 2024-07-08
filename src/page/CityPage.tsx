import { MainSection } from "../shared/ui/sections/MainSection/MainSection";
import { CityDescriptionSection } from "../shared/ui/sections/CityDescriptionSection/CityDescriptonSection";
import { Navbar } from "../widgets/navbar/Navbar";

export const CityPage = () => {
  return (
    <>
      <Navbar />
      <MainSection url="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7gOMnLkWgAcBjorKTLHnoz%2Ffdfff6ebd6091743aaff7b0646b8cef6%2Fcitybanner_desktop.png&w=3840&q=75" />
      <CityDescriptionSection />
    </>
  );
};
