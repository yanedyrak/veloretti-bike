import { ElectricDescription } from "../shared/ui/sections/ElectricDescription/ElectricDescription";
import { ElectricPhoto } from "../shared/ui/sections/ElectricPhoto/ElectricPhoto";
import { ElectricText } from "../shared/ui/sections/ElectricText/ElectricText";
import { MainLayout } from "../shared/ui/sections/MainLayout/MainLayout";

import { InfoProduct } from "../entities/infoProduct/InfoProduct";

export const ElectricPage = () => {
  return (
    <>
      <MainLayout
        img={
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3BkIRBLr9BO0c98MT7lsqy%2F3fc1e3d7f42753720ea74e42814ef5ed%2FHomepage_desktop_2.jpg&w=3840&q=75"
        }
        mainText="About us"
      />
      <ElectricDescription />
      <ElectricText />
      <ElectricPhoto />
      <InfoProduct />
    </>
  );
};
