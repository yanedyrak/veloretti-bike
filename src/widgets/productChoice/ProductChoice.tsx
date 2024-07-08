import styles from "./ProductChoice.module.scss";
export const ProductChoice = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>Electric Two</h3>
        <p className={styles.price}>$2.999</p>
      </div>
    </div>
  );
};
