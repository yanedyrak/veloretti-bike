import { useGSAP } from "@gsap/react";
import styles from "./AboutSection.module.scss";
import img from "./AboutSection.png";

import { gsap } from "gsap";
import { useRef } from "react";

export const AboutSection = () => {
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
      <img src={img} alt="Person" />
      <div>
        <h2>Bike plans for employees.</h2>
        <p>
          Veloretti Electrics benefit both the environment and the health of
          your employees. Oh, and they look good too. Cost-free for the employer
          and outside of the WKR.
        </p>
      </div>
    </div>
  );
};
