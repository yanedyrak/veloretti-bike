import styles from "./Footer.module.scss";
import { ButtonTopSVG } from "../../shared/svg/ButtonTopSVG";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Explorer",
    links: [
      "Electric bikes",
      "City bikes",
      "Kids bikes",
      "Accessories",
      "Outlet",
      "Business",
      "Insurance Electric",
      "Size guide",
    ],
  },
  {
    name: "About",
    links: ["About us", "Journal", "Reviews", "Press", "Jobs"],
  },
  {
    name: "Help",
    links: [
      "Contact",
      "FAQ",
      "Delivery",
      "Assembly & manuals",
      "Payment options",
      "Privacy police",
      "Terms & conditions",
    ],
  },
];
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.button}>
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
      </div>
      <div className={styles.main}>
        {data.map((item) => (
          <div className={styles.description} key={item.name}>
            <h3 className={styles.title}>{item.name}</h3>
            <div className={styles.links}>
              {item.links.map((link) => (
                <Link to={`/${link}`} key={link}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.form}>
          <h3>Join the ride.</h3>
          <p>Sing up for our newsletter.</p>
          <div className={styles.input}>
            <input
              placeholder="Enter your email adress here"
              type="text"
              name=""
              id=""
            />
            <button>Subscribe</button>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="" id="" />
            <p>By signing up, I agree to the privacy policy of Veloretti.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
