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
  const [isWhite, setIsWhite] = useState(false);
  const prev = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      if (prev.current < window.scrollY) {
        setIsScrolled(true);
        setIsWhite(false);
        prev.current = window.scrollY;
      } else {
        setIsScrolled(false);
        window.scrollY > 100 ? setIsWhite(true) : setIsWhite(false);

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
      className={`${styles.navbar} ${isScrolled ? styles.scroll : ""}`}
      style={{
        backgroundColor: isWhite ? "white" : "transparent",
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
          style={{ fill: isWhite ? "black" : "white" }}
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
              style={{ color: isWhite ? "black" : "white" }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.interface}>
        <button className={styles.button}>
          <BurgerSVG stroke={isWhite ? "black" : "white"} />
        </button>
        <button className={styles.button}>
          <ProfileSVG stroke={isWhite ? "black" : "white"} />
        </button>
        <button className={styles.button}>
          <CartSVG stroke={isWhite ? "black" : "white"} />
        </button>
      </div>
    </nav>
  );
};
