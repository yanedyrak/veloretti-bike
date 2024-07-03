import styles from "./ElectricDescription.module.scss";
import img1 from "./1.png";
import img2 from "./2.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const ElectricDescription = () => {
  const layout = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(layout.current, {
      y: -300,
      scrollTrigger: {
        trigger: layout.current,
        start: "top 90%",
        end: "top 15%",
        scrub: true,
      },
    });
  });
  return (
    <div ref={layout} className={styles.layout}>
      <div className={styles.container}>
        <img src={img1} alt="" />
        <div className={styles.info}>
          <h1 className={styles.title}>Forever forward</h1>
          <p className={styles.text}>
            Our bikes are made to stand the test of time, both aesthetically and
            practically. Whether you’re after a state-of-the-art electric bike,
            a classic city bike, or a kids bike for the school run, we want to
            help make your commute the best part of your day.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>Part of Pon.Bike</h1>
          <p className={styles.text}>
            Veloretti was founded in Amsterdam in 2012 with a mission to make
            clean, timeless bikes that are great quality and delivered to your
            door at a fair price. We are proud to now be part of Pon.Bike, the
            world-leading family of bike brands. With this support, we can
            continue to evolve our designs, take care of our riders, and help
            keep their bikes on the road.
          </p>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};
