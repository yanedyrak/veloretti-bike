import { MainSection } from "../shared/ui/sections/MainSection/MainSection";
import { BikesListSection } from "../shared/ui/sections/BikesListSection/BikesListSection";
import { ExploreListSection } from "../shared/ui/sections/ExploreListSection/ExploreListSection";
import { MapSection } from "../shared/ui/sections/MapSection/MapSection";
import { ReviewsSection } from "../shared/ui/sections/ReviewsSection/ReviewsSection";
import { AwardSection } from "../shared/ui/sections/AwardSection/AwardSection";
import { PhotoSection } from "../shared/ui/sections/PhotoSection/PhotoSection";

export const MainPage = () => {
  return (
    <>
      <MainSection url="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3BkIRBLr9BO0c98MT7lsqy%2F3fc1e3d7f42753720ea74e42814ef5ed%2FHomepage_desktop_2.jpg&w=2048&q=75" />
      <BikesListSection />
      <ExploreListSection />
      <MapSection />
      <ReviewsSection />
      <AwardSection />
      <PhotoSection />
    </>
  );
};
