import styles from "./ElectricDescriptionSection.module.scss";
import { Link } from "react-router-dom";
export const ElectricDescriptionSection = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>Ace Two</h1>
          <p className={styles.description}>
            Experience the revolutionary Ace Two: the electric bike that
            completely transforms your urban commute. This sleek powerhouse is
            here to redefine the way you ride by combining fully integrated
            functionality and a modern, refined aesthetic. Feel the instant
            power as you effortlessly navigate the city streets, all thanks to
            the Ace Two's automatic gear shifting and silent mid-motor.
          </p>
          <Link to="/" className={styles.link}>
            Learn More
          </Link>
        </div>

        <img
          className={styles.image}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F8EyEI2u87fB9qphi89Oqm%2F4ad546c9a7db7fb75087d9d7bc9766e2%2FAce2floating_desktop.png&w=3840&q=75"
          alt=""
        />
      </div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4ekEb6Uhl2cbrXYuSHvFLJ%2Fdc9430294b4b25fe5e993a1dc68b6c7b%2FIvy2floating_desktop.png&w=1920&q=75"
          alt=""
        />
        <div className={styles.info}>
          <h1 className={styles.title}>Ivy Two</h1>
          <p className={styles.description}>
            Introducing the Ivy Two, the electric bike that takes your daily
            commute to the next level. With an accessible lower frame, the
            latest technology, and safety features, the Ivy delivers instant
            power, convenience, and peace of mind at every turn, making it the
            go-to bike for any commute. Equipped with a bright LED brake light
            for enhanced visibility and safety tracking for added security, the
            Ivy Two is the perfect combination of design, technology, and
            safety.
          </p>
          <Link to="/" className={styles.link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
