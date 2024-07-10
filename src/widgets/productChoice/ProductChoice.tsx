import styles from "./ProductChoice.module.scss";
import { BikeAccessory } from "../../entities/BikeAccessory/BikeAccessory";
import { ProductCare } from "../ProductCare/ProductCare";
import { Color } from "../../entities/Color/Color";
import React from "react";
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
      {
        title: "FRONT CARRIER",
        accessories: [
          {
            id: 1,
            soldOut: false,
            image:
              "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4A4eBVLadmIJhuTFBpowvp%2F0f006493dec99cc2e75de9f973781e04%2FFront_carrier_matte_black__thumbnail_desktop.jpg&w=1920&q=75",
            title: "AXA Framework Lock",
            price: "9.99",
          },

          {
            id: 2,
            soldOut: false,
            image:
              "https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F50UUojCKxt2Imi3znmaz8m%2F6a9214c96d22a56f7695dcdd585f2c90%2FFront_carrier_silver___thumbnail_desktop.jpg&w=1920&q=75",
            title: "AXA Framework Lock",
            price: "9.99",
          },
        ],
      },
    ],
  },
];

export const ProductChoice = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>{data[0].title}</h3>
        <p className={styles.price}>${data[0].price}</p>
      </div>
      <div className={styles.models}>
        <h3 className={styles.title}>Choose a model </h3>
        <div className={styles.modelList}>
          {data[0].models.map((item, index) => (
            <div key={index} className={styles.model}>
              <div className={styles.modelImage}>
                <img src={item.image} alt="" />
              </div>

              <p className={styles.modelName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.title}>Choose a color</h3>
        <div className={styles.colorList}>
          {data[0].colors.map((item, index) => (
            <Color key={index} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.accessories}>
        <h3 className={styles.title}>Add accessories</h3>

        <div className={styles.accessoriesList}>
          {data[0].accessories.map((item, index) => (
            <React.Fragment key={index}>
              <h3 className={styles.name}>{item.title}</h3>
              {item.accessories.map((item, index) => (
                <BikeAccessory key={index} {...item} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <h3
        style={{
          padding: "50px",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "125%",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Add a Care
      </h3>
      <ProductCare
        price={"150"}
        title={"Premium"}
        plusList={["Black", "White"]}
        popular
      />
      <div className={styles.button}>
        <button>Next</button>
      </div>
    </div>
  );
};
