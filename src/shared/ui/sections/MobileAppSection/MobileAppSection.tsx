import { Link } from "react-router-dom";
import styles from "./MobileAppSection.module.scss";
export const MobileAppSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Everything in one app.</h1>
        <p className={styles.description}>
          We believe in technology elevating your life, particularly in managing
          your bike. Our constantly evolving app connects and empowers you to
          control your bike effortlessly. From monitoring ride performance to
          managing battery life, our app's intuitive interface makes customizing
          ride settings and preferences easy.
        </p>
        <Link to="/" className={styles.link}>
          Learn More
        </Link>
      </div>
      <img
        className={styles.image}
        src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F1Kfbuaj0L1egnCGWt4wV0I%2F97dc2994b4b3904368ed16c30f974274%2FApp_page-iPhone-Desktop-1_copy.png&w=1920&q=75"
        alt=""
      />
    </section>
  );
};
