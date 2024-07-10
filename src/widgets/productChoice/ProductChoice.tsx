import styles from "./ProductChoice.module.scss";
import { BikeAccessory } from "../../entities/BikeAccessory/BikeAccessory";
import { ProductCare } from "../ProductCare/ProductCare";
import { Color } from "../../entities/Color/Color";
import React from "react";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setColor } from "../../shared/store/colorSlice";
import { Product } from "../../shared/types/Product";
import { useAppSelector } from "../../shared/hooks/useAppSelector";

export const ProductChoice = ({ data }: { data: Product }) => {
  const dispatch = useAppDispatch();
  const carePrice = useAppSelector((state) => state.care.price);
  const accessoriesPrice = useAppSelector(
    (state) => state.accessories.value
  ).reduce((acc, item) => acc + item.price, 0);
  dispatch(setColor(data.colors[0].value));

  return (
    <div className={styles.layout}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>{data.title}</h3>
        <p className={styles.price}>
          ${" "}
          {(data.price + carePrice + accessoriesPrice).toFixed(2).split("")[0] +
            "," +
            (data.price + carePrice + accessoriesPrice)
              .toFixed(2)
              .split("")
              .splice(1)
              .join("")}
        </p>
      </div>

      <div className={styles.colors}>
        <h3 className={styles.title}>Choose a color</h3>
        <div className={styles.colorList}>
          {data.colors.map((item, index) => (
            <Color key={index} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.accessories}>
        <h3 className={styles.title}>Add accessories</h3>

        <div className={styles.accessoriesList}>
          {data.accessories.map((item, index) => (
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
      {[
        {
          price: 0,
          title: "Standard",
          plusList: ["Updates / manually vie bluetooth"],
        },
        {
          price: 150,
          title: "Premium",
          plusList: [
            "Theft insurance",
            "Damage insurance",
            "GPS Bike Location",
            "EU Data Roaming",
          ],
          popular: true,
        },
      ].map((item, index) => (
        <ProductCare key={index} {...item} />
      ))}

      <div className={styles.button}>
        <button>Next</button>
      </div>
    </div>
  );
};
