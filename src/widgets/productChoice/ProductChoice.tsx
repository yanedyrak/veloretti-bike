import styles from "./ProductChoice.module.scss";
import { BikeAccessory } from "../../entities/BikeAccessory/BikeAccessory";
import { ProductCare } from "../ProductCare/ProductCare";
import { Color } from "../../entities/Color/Color";
export const ProductChoice = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>Electric Two</h3>
        <p className={styles.price}>$2.999</p>
      </div>
      <div className={styles.models}>
        <h3 className={styles.title}>Choose a model </h3>
        <div className={styles.modelList}>
          <div className={styles.model}>
            <div className={styles.modelImage}>
              <img
                src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75"
                alt=""
              />
            </div>

            <p className={styles.modelName}>Electric Two</p>
          </div>
        </div>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.title}>Choose a color</h3>
        <div className={styles.colorList}>
          {[
            {
              color: "#000000",
              isActive: true,
            },
            {
              color: "#482482",
              isActive: false,
            },
          ].map((item, index) => (
            <Color key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.accessories}>
        <h3 className={styles.title}>Add accessories</h3>
        <div className={styles.accessoriesList}>
          <h3 className={styles.name}>Bages</h3>
          <BikeAccessory />
          <BikeAccessory />
        </div>
      </div>
      <ProductCare
        price={"150"}
        title={"Premium"}
        plusList={["Black", "White"]}
        popular
      />
    </div>
  );
};
