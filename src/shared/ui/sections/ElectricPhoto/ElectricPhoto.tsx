import { useGSAP } from "@gsap/react";
import styles from "./ElectricPhoto.module.scss";
import gsap from "gsap";
import { useRef } from "react";
export const ElectricPhoto = () => {
  const layout = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(layout.current, {
      y: -500,
      scrollTrigger: {
        trigger: layout.current,
        start: "top 100%",
        end: "top 15%",
        scrub: true,
      },
    });
  });
  return (
    <div ref={layout} className={styles.layout}>
      <div className={styles.container}>
        <h2>Made for you</h2>
        <p>
          Elevate your ride with a bicycle that mirrors your unique style and
          personality. From an Ace Two electric bike with the latest technology
          packed into a minimalist design, or a bright yellow Berlin for those
          who like to ride light and have a craving for nostalgia. Our diverse
          range of models and colours cater to riders of all kinds.
        </p>
      </div>
    </div>
  );
};
