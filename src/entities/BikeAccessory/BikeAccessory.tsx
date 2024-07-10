import styles from "./BikeAccessory.module.scss";
export const BikeAccessory = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.price}>+$ {price}</p>
        <h3 className={styles.title}> {title}</h3>
      </div>
    </div>
  );
};
