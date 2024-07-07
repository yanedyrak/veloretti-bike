import { AccessoryType } from "../../shared/types/Accessory";
import styles from "./Accessory.module.scss";
export const Accessory = ({ soldOut, image, title, price }: AccessoryType) => {
  return (
    <div className={styles.container}>
      {soldOut ? <span className={styles.soldOut}>SOLD OUT</span> : null}
      <img className={styles.image} src={image} alt="accessory" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>$ {price}</p>
      </div>
    </div>
  );
};
