import styles from "./ElectricDescriptionSection.module.scss";
import { Link } from "react-router-dom";
export const ElectricDescriptionSection = () => {
  return (
    <section>
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
              for enhanced visibility and safety tracking for added security,
              the Ivy Two is the perfect combination of design, technology, and
              safety.
            </p>
            <Link to="/" className={styles.link}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.testing}>
        <h1 className={styles.testTitle}>Test ride our Electric Ivy or Ace</h1>
        <p className={styles.testDescription}>
          Discovering your ideal bike just got easier. Schedule a test ride at
          one of our testing locations and experience our Ivy and Ace Two up
          close and personal.
        </p>
        <button className={styles.testButton}>Book now</button>
      </div>
      <div className={styles.img} />
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={styles.title}>Ride carefree</h1>
            <p className={styles.description}>
              Our Qover x Veloretti insurance plan has got you covered. It
              offers comprehensive coverage against theft, provides assistance
              in case of any issues, and covers any damages to your bike.
            </p>
            <Link to="/" className={styles.link}>
              Learn More
            </Link>
          </div>

          <img
            className={styles.image}
            src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F5LGa0yeZkHCqVFLDv4SiOq%2F9f0518456b85a3e025a0d9af47bfe385%2FInsurance_desktop.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div className={styles.container}>
          <img
            className={styles.image}
            src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F6wiT3m2TX6cwjFzzvF8Yhb%2F5a9b8dc7cd5a92bb3721a79635832f40%2FE-Leasing_desktop.png&w=1920&q=75"
            alt=""
          />
          <div className={styles.info}>
            <h1 className={styles.title}>Leasing</h1>
            <p className={styles.description}>
              Does your Dutch employer offer a bike scheme? Then you might be
              able to lease a Veloretti Ivy or Ace Two and benefit from the
              great tax incentives. Embrace a new era of commuting from €75 a
              month.
            </p>
            <Link to="/" className={styles.link}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
