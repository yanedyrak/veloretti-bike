import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import { ProfileSVG } from "../../shared/svg/ProfileSVG";
import { CartSVG } from "../../shared/svg/CartSVG";
import { BurgerSVG } from "../../shared/svg/BurgerSVG";
import { LogoSVG } from "../../shared/svg/LogoSVG";
const data = ["electric", "city", "kids", "accessories", "stores", "leasing"];
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWithLinks}>
        <Link to="/" className={styles.logo}>
          <LogoSVG />
        </Link>

        <div className={styles.links}>
          {data.map((item) => (
            <Link className={styles.link} key={item} to={`/${item}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.interface}>
        <button className={styles.button}>
          <BurgerSVG />
        </button>
        <button className={styles.button}>
          <ProfileSVG />
        </button>
        <button className={styles.button}>
          <CartSVG />
        </button>
      </div>
    </nav>
  );
};
