import styles from "./Product.module.scss";
import img from "./img.png";
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndHeight}>
        <h3 className={styles.name}>Electric Ace</h3>
        <p className={styles.height}>Rider height: 170-200cm</p>
      </div>

      <img className={styles.img} src={img} alt="" />
      <div className={styles.colorsAndButton}>
        <div className={styles.buttonAndMore}>
          <button className={styles.button}>Buy now</button>
          <Link className={styles.link} to="/">
            Learn more
          </Link>
        </div>
        <div className={styles.colors}>
          <div className={styles.active}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#595959",
            }}
          ></div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "gray",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
