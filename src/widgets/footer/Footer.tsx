import styles from "./Footer.module.scss";
import { ButtonTopSVG } from "../../shared/svg/ButtonTopSVG";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={styles.button}
      >
        <ButtonTopSVG />
      </button>
      <div></div>
    </footer>
  );
};
