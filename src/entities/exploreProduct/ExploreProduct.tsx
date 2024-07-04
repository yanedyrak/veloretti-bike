import { Link } from "react-router-dom";
import styles from "./ExploreProduct.module.scss";

export const ExploreProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>City Bikes</h3>
        <p className={styles.price}>From $399</p>
      </div>
      <img
        className={styles.img}
        src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F29WqlKbnuoNfKWavx65nYk%2F50d96f2f987e0f77af1dd2081ce381ee%2Ftile_cityMdesktop2.png&w=1920&q=75"
        alt=""
      />
      <div className={styles.buttonAndMore}>
        <button className={styles.button}>Buy now</button>
        <Link className={styles.link} to="/">
          Learn more
        </Link>
      </div>
    </div>
  );
};
