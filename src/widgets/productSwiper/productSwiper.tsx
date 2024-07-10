import { Carousel } from "antd";
import "./ProductSwiper.scss";
const data = [
  {
    id: 1,
    title: "Electric Two",
    riderHeight: "170-190",
    price: 2999,
    models: [
      {
        id: 1,
        name: "Electric Two",
        image:
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7hNEsXcYlwPkoCGYPyx58K%2Fa2b8fc3ade6f40a6fac617c4261c8a5e%2FAce_Two_Matte_Black.jpg&w=1920&q=75",
      },
      {
        id: 2,
        name: "Electric Ivy",
        image:
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2idsaCrMYqIDeu6zuVrWVC%2Ff46e3b943818da3434a3a86930689344%2FIvy_Two_Matte_Black.jpg&w=1920&q=75",
      },
    ],
    images: [
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75",
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4AwTxMu2tOFfxywNVTSNNL%2F7196edcb2c2a8bc08e515f2cdfa95859%2FAce_Two_Matte_Black_2_NEW.png&w=3840&q=75",
      "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F15jOxr0oAbQWzxEh66WUwb%2Fb8201e0547a94c310cd6b8a31904a8a1%2FAce_Two_Matte_Black_3_NEW.png&w=3840&q=75",
    ],
    colors: [
      {
        value: "#000000",
      },
      {
        value: "#FFFFFF",
      },
    ],
    accessories: [
      {
        title: "Locks",
        accessories: [
          {
            id: 1,
            soldOut: false,
            image:
              "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7sMMxPhjcesQiWTyDoTzuM%2F37b8b7e8deab76649f222acb839c9fd2%2FAXA_Framelock_140CM_Chain_desktop.jpg&w=1920&q=75",
            title: "AXA Framework Lock",
            price: "9.99",
          },
        ],
      },
    ],
  },
];

export const ProductSwiper = () => (
  <>
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "0 4vw",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Carousel dots arrows infinite={false}>
        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75"
          alt=""
        />

        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4AwTxMu2tOFfxywNVTSNNL%2F7196edcb2c2a8bc08e515f2cdfa95859%2FAce_Two_Matte_Black_2_NEW.png&w=3840&q=75"
          alt=""
        />

        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F15jOxr0oAbQWzxEh66WUwb%2Fb8201e0547a94c310cd6b8a31904a8a1%2FAce_Two_Matte_Black_3_NEW.png&w=3840&q=75"
          alt=""
        />
      </Carousel>
    </div>
  </>
);
