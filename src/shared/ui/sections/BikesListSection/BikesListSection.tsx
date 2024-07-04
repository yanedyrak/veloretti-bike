import styles from "./BikesListSection.module.scss";
import { Product } from "../../../../entities/product/Product";
export const BikesListSection = () => {
  return (
    <div className={styles.container}>
      <Product />
      <Product />
    </div>
  );
};
