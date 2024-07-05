import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import { ProfileSVG } from "../../shared/svg/ProfileSVG";
import { CartSVG } from "../../shared/svg/CartSVG";
import { BurgerSVG } from "../../shared/svg/BurgerSVG";
import { LogoSVG } from "../../shared/svg/LogoSVG";
import { useEffect, useRef, useState } from "react";
const data = ["electric", "city", "kids", "accessories", "stores", "leasing"];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const prev = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      if (prev.current < window.scrollY) {
        setIsScrolled(true);
        prev.current = window.scrollY;
      } else {
        setIsScrolled(false);
        console.log(window.scrollY);
        prev.current = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.scroll : styles.nonScroll
      }`}
    >
      <div className={styles.logoWithLinks}>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/"
          className={styles.logo}
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
            >
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
