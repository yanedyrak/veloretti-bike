import { MainSection } from "../shared/ui/sections/MainSection/MainSection";
import { BikesListSection } from "../shared/ui/sections/BikesListSection/BikesListSection";
import { ElectricDescriptionSection } from "../shared/ui/sections/ElectricDescriptionSection/ElectricDescriptionSection";
import { MobileAppSection } from "../shared/ui/sections/MobileAppSection/MobileAppSection";
export const ElectricPage = () => {
  return (
    <>
      <MainSection url="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7kRdyhXbdMusksq7nScllw%2Ff80eb0e3f0af5afc5066898c23f9c075%2FElectric1_desktop.png&w=3840&q=75" />
      <BikesListSection />
      <video
        style={{
          margin: "20vh 0",
          width: "100%",
        }}
        muted
        loop
        autoPlay
        src="https://player.vimeo.com/progressive_redirect/playback/841852100/rendition/1080p/file.mp4?loc=external&signature=926d507f459d7569cf16cffcfe696fb05806dee8a415c76e1b6ca63eb7482b15"
      ></video>

      <ElectricDescriptionSection />
      <MobileAppSection />
    </>
  );
};
