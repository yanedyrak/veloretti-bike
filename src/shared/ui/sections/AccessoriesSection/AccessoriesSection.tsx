import styles from "./AccessoriesSection.module.scss";
import { Accessory } from "../../../../entities/Accessory/Accessory";
import { AccessoryType } from "../../../types/Accessory";

export const AccessoriesSection = ({
  title,
  ImgGridColumnStart,
  ImgGridColumnEnd,
  ImgGridRowStart,
  ImgGridRowEnd,
  imgUrl,
  accessories,
}: {
  title: string;
  ImgGridColumnStart?: number;
  ImgGridColumnEnd?: number;
  ImgGridRowStart?: number;
  ImgGridRowEnd?: number;
  imgUrl?: string;
  accessories: AccessoryType[];
}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {accessories.map((accessory) => (
          <Accessory
            id={accessory.id}
            soldOut={accessory.soldOut}
            image={accessory.image}
            title={accessory.title}
            price={accessory.price}
          />
        ))}
        {imgUrl && (
          <div
            className={styles.photo}
            style={{
              backgroundImage: `url(${imgUrl})`,
              gridColumnStart: ImgGridColumnStart,
              gridColumnEnd: ImgGridColumnEnd,
              gridRowStart: ImgGridRowStart,
              gridRowEnd: ImgGridRowEnd,
            }}
          ></div>
        )}
      </div>
    </section>
  );
};
