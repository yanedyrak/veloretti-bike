import styles from "./Product.module.scss";
import img from "./img.png";
export const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>Electric Ace</h3>
        <p className={styles.price}>$69/month</p>
      </div>

      <img className={styles.img} src={img} alt="" />
      <div className={styles.colors}>
        <div className={styles.active}>
          <div
            style={{
              width: "19px",
              height: "19px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "19px",
            height: "19px",
            borderRadius: "50%",
            backgroundColor: "#595959",
          }}
        ></div>
        <div
          style={{
            width: "19px",
            height: "19px",
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></div>
      </div>
    </div>
  );
};
