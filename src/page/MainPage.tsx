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
      <MainSection />
      <BikesListSection />
      <ExploreListSection />
      <MapSection />
      <ReviewsSection />
      <AwardSection />
      <PhotoSection />
    </>
  );
};
