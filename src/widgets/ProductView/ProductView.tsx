import { ProductChoice } from "../productChoice/ProductChoice";
import { ProductSwiper } from "../productSwiper/productSwiper";
import styles from "./ProductView.module.scss";
export const ProductView = () => {
  return (
    <div className={styles.container}>
      <ProductSwiper />
      <ProductChoice />
    </div>
  );
};
