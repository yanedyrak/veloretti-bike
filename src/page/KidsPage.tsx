import { MainSection } from "../shared/ui/sections/MainSection/MainSection";
import { KidsDescriptionSection } from "../shared/ui/sections/KidsDescriptionSection/KidsDescriptionSection";
import { KidsBikesPhotoSection } from "../shared/ui/sections/KidsBikesPhotoSection/KidsBikesPhotoSection";
import { KidsTextSection } from "../shared/ui/sections/KidsTextSection/KidsTextSection";
import { KidsPhotoSection } from "../shared/ui/sections/KidsPhotoSection/KidsPhotoSection";
import { Navbar } from "../widgets/navbar/Navbar";

export const KidsPage = () => (
  <>
    <Navbar />
    <MainSection url="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3vAAOYw6ATtbOAfNczy65D%2Fb52044e75f7d92b97c552659a3f0c280%2Fbanner_kidsdesktop.jpg&w=3840&q=75" />
    <KidsDescriptionSection />
    <KidsBikesPhotoSection />
    <KidsTextSection />
    <KidsPhotoSection />
  </>
);
