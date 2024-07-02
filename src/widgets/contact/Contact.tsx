import { useGSAP } from "@gsap/react";
import styles from "./Contact.module.scss";
import { useRef } from "react";
import gsap from "gsap";
export const Contact = () => {
  const text = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(text.current, {
      y: 200,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: text.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.from(form.current, {
      opacity: 0,

      scrollTrigger: {
        trigger: text.current,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    });
  });
  return (
    <div className={styles.container}>
      <div>
        <h2 ref={text}>Get in touch</h2>
      </div>
      <div>
        <div ref={form} className={styles.form}>
          <input placeholder="First name" type="text" />
          <input placeholder="Last name" type="text" />
          <input placeholder="Email address" type="text" />
          <input placeholder="Phone number" type="text" />
          <input placeholder="Company name" type="text" />
          <input placeholder="Number of bikes" type="text" />
          <textarea placeholder="How can we help"></textarea>
        </div>
      </div>
      <button>Send the request</button>
    </div>
  );
};
