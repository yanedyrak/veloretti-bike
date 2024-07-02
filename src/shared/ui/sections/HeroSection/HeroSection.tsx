import { useRef } from "react";
import styles from "./HeroSection.module.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export const HeroSection = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);
  const brand = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    gsap.to(scroll.current, {
      y: -15,
      ease: "power4.out",
      duration: 0.3,
      yoyo: true,
      repeat: -1,
    });

    gsap
      .timeline()
      .from(brand.current, {
        opacity: 0,
        duration: 0.8,
        y: -140,
        delay: 0.4,
      })
      .from(text.current, {
        opacity: 0,
        y: 140,
        duration: 0.8,
      });
  });
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <p ref={brand}>VELORETTI BUSINESS</p>
        <h1 ref={text}>Bike lease plan for employees.</h1>
      </div>
      <div ref={scroll} className={styles.scroll}>
        Scroll
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#fff"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
    </div>
  );
};
