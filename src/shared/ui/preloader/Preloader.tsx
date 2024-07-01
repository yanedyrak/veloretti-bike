import { useGSAP } from "@gsap/react";
import styles from "./Preloader.module.scss";
import { useRef } from "react";
import gsap from "gsap";
export const Preloader = () => {
  const preloader = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(preloader.current, {
      opacity: 1,

      delay: 1,
    });
  });
  return <div ref={preloader} className={styles.preloader}></div>;
};
