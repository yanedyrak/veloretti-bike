import { ProductChoice } from "../productChoice/ProductChoice";
import { ProductSwiper } from "../productSwiper/productSwiper";
import styles from "./ProductView.module.scss";
const data = [
  {
    id: 1,
    title: "Electric Two",
    riderHeight: "170-190",
    price: 2990,
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
        images: [
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4AwTxMu2tOFfxywNVTSNNL%2F7196edcb2c2a8bc08e515f2cdfa95859%2FAce_Two_Matte_Black_2_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F15jOxr0oAbQWzxEh66WUwb%2Fb8201e0547a94c310cd6b8a31904a8a1%2FAce_Two_Matte_Black_3_NEW.png&w=3840&q=75",
        ],
      },
      {
        value: "#606160",
        images: [
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F5QQx3TINFKmnhEdb7kWylK%2F32e111af29eb4c4e3b3b8d96c04b61bc%2FAce_Two_-_Graphite_-_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7gnxo4iPqOqIygEcJiDrnY%2F6d1d60dec7013fb5df1047e7218c2e16%2FAce_Two_-_Graphite_-_2_-_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2xlK1NuvwaMl8QAvP6Tuk9%2F360fe969afc2a62ffdb87be788fe07b4%2FAce_Two_-_Graphite_-_3_-_NEW.png&w=3840&q=75",
        ],
      },
      {
        value: "#DDD9CD",
        images: [
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4hBQ0mveWwyCoq0ldc8mfH%2Fd6ec9fad19ffa98e48d2d20386b1e7f0%2FAce_Two_-_Dune_-_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2v4m29FYPEV3wzHJeFBj6X%2Ff28c8677bb8bc72aa4f2829f9c961dc5%2FAce_Two_-_Dune_-_2_-_NEW.png&w=3840&q=75",
          "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F15UQcIKHmKcKv0fhAEJdCH%2Fe67e70bf77d7e6e4e483cc8439cb16c0%2FAce_Two_-_Dune_-_3_-_NEW.png&w=3840&q=75",
        ],
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
            price: 9.99,
          },
        ],
      },
      {
        title: "FRONT CARRIER",
        accessories: [
          {
            id: 1,
            soldOut: false,
            image:
              "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4A4eBVLadmIJhuTFBpowvp%2F0f006493dec99cc2e75de9f973781e04%2FFront_carrier_matte_black__thumbnail_desktop.jpg&w=1920&q=75",
            title: "AXA Framework Loc",
            price: 9.99,
          },

          {
            id: 2,
            soldOut: false,
            image:
              "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F50UUojCKxt2Imi3znmaz8m%2F6a9214c96d22a56f7695dcdd585f2c90%2FFront_carrier_silver___thumbnail_desktop.jpg&w=1920&q=75",
            title: "AXA Framework Lck",
            price: 9.99,
          },
        ],
      },
    ],
  },
];

export const ProductView = () => {
  return (
    <div className={styles.container}>
      <ProductSwiper colors={data[0].colors} />
      <ProductChoice data={data[0]} />
    </div>
  );
};
