import { AccessoriesSection } from "../shared/ui/sections/AccessoriesSection/AccessoriesSection";
import { MainSection } from "../shared/ui/sections/MainSection/MainSection";
import { AccessoryType } from "../shared/types/Accessory";
const data: AccessoryType[] = [
  {
    id: 1,
    soldOut: false,
    image:
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2YADqDQsWHLc1C02aR1Ory%2F37de2506f176f6c4c155be6b81c93825%2FFront_carrier_silver___thumbnail_desktop.jpg&w=1920&q=75",
    title: "Electric Two",
    price: "9.99",
  },
  {
    id: 2,
    soldOut: false,
    image:
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2YADqDQsWHLc1C02aR1Ory%2F37de2506f176f6c4c155be6b81c93825%2FFront_carrier_silver___thumbnail_desktop.jpg&w=1920&q=75",
    title: "Electric Two",
    price: "9.99",
  },
  {
    id: 3,
    soldOut: false,
    image:
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2YADqDQsWHLc1C02aR1Ory%2F37de2506f176f6c4c155be6b81c93825%2FFront_carrier_silver___thumbnail_desktop.jpg&w=1920&q=75",
    title: "Electric Two",
    price: "9.99",
  },
];
export const AccessoriesPage = () => {
  return (
    <>
      <MainSection
        url={
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2o3UpJ6O44tkGdGQjUsQbL%2F67cf55ba238a4cd58063310be08375e4%2FAccessories_desktop.jpg&w=2048&q=75"
        }
      />

      <AccessoriesSection
        ImgGridColumnStart={3}
        ImgGridColumnEnd={5}
        ImgGridRowStart={1}
        ImgGridRowEnd={3}
        accessories={data}
        imgUrl="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3YQ2CiNkpeqJml4nirNydp%2F1e3fa58a7252499d6ffdcfde1b2fb0ec%2FAccessories_overview_desktop_1.jpg&w=1920&q=75"
        title="Electric Two Accessories"
      />

      <AccessoriesSection
        ImgGridColumnStart={1}
        ImgGridColumnEnd={3}
        ImgGridRowStart={1}
        ImgGridRowEnd={3}
        accessories={data}
        imgUrl="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F6AXBOUIisBf1hCkndkTPCs%2F84f36d1200f4323822a0bf71ec39f8b0%2FFrame_1038.jpg&w=1920&q=75"
        title="Electric One Accessories"
      />

      <AccessoriesSection
        ImgGridColumnStart={3}
        ImgGridColumnEnd={5}
        ImgGridRowStart={1}
        ImgGridRowEnd={3}
        accessories={data}
        imgUrl="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2kZazBcr2nb3bWzKZC7awL%2F8b5111aad2a4a3d2b7507f42bbd6f71a%2FFrame_1036.jpg&w=1920&q=75"
        title="Headgear"
      />

      <AccessoriesSection
        ImgGridColumnStart={1}
        ImgGridColumnEnd={3}
        ImgGridRowStart={1}
        ImgGridRowEnd={3}
        accessories={data}
        imgUrl="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3IKvwcsKIlKHwS5AJkbJu6%2Fcbefc3fa91ec872603226b1a45d3c626%2FFrame_1040.jpg&w=1920&q=75"
        title="Carriers and baskets"
      />

      <AccessoriesSection accessories={data} title="Lights and locks" />

      <AccessoriesSection
        ImgGridColumnStart={3}
        ImgGridColumnEnd={5}
        ImgGridRowStart={1}
        ImgGridRowEnd={3}
        accessories={data}
        imgUrl="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F1JslmaP2J5Lm1Vys9kb456%2Fe2ffb3bdf830b2a0d4b73064db92e9fb%2FFrame_1037.jpg&w=1920&q=75"
        title="Kids accessories"
      />
    </>
  );
};
