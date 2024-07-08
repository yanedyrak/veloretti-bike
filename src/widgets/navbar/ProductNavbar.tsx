import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import { ProfileSVG } from "../../shared/svg/ProfileSVG";
import { CartSVG } from "../../shared/svg/CartSVG";
import { BurgerSVG } from "../../shared/svg/BurgerSVG";
import { LogoSVG } from "../../shared/svg/LogoSVG";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { openDrawer } from "../../shared/store/drawerSlice";
const data = ["electric", "city", "kids", "accessories", "leasing"];
export const ProductNavbar = () => {
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`${styles.navbar}`}
      style={{
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div className={styles.logoWithLinks}>
        <Link
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          to="/"
          className={styles.logo}
          style={{ fill: "black" }}
        >
          <LogoSVG />
        </Link>

        <div className={`${styles.links}`}>
          {data.map((item) => (
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className={styles.link}
              key={item}
              to={`/${item}`}
              style={{ color: "black" }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.interface}>
        <button className={styles.button}>
          <BurgerSVG stroke={"black"} />
        </button>
        <button className={styles.button}>
          <ProfileSVG stroke={"black"} />
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(openDrawer())}
        >
          <CartSVG stroke={"black"} />
        </button>
      </div>
    </nav>
  );
};
