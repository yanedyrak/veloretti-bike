import { ElectricDescription } from "../shared/ui/sections/ElectricDescription/ElectricDescription";
import { ElectricPhoto } from "../shared/ui/sections/ElectricPhoto/ElectricPhoto";
import { ElectricText } from "../shared/ui/sections/ElectricText/ElectricText";
import { MainLayout } from "../shared/ui/sections/MainLayout/MainLayout";
import img2 from "../shared/ui/sections/MainLayout/Media_fullHeight.png";

export const ElectricPage = () => {
  return (
    <>
      <MainLayout img={img2} mainText="About us" />
      <ElectricDescription />
      <ElectricText />
      <ElectricPhoto />
    </>
  );
};
