import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export const ElectricText = () => {
  const main = useRef<HTMLSpanElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const text1 = useRef<HTMLSpanElement>(null);
  const text2 = useRef<HTMLSpanElement>(null);
  const text3 = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    gsap.from(main.current, {
      y: 200,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "top 50%",
        end: "top 35%",
        scrub: true,
      },
    });
    gsap.from(text.current, {
      y: 200,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "top 50%",
        end: "top 35%",
        scrub: true,
      },
    });
    gsap.from(text1.current, {
      y: 300,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "top 50%",
        end: "top 35%",
        scrub: true,
      },
    });
    gsap.from(text2.current, {
      y: 400,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "top 50%",
        end: "top 35%",
        scrub: true,
      },
    });
    gsap.from(text3.current, {
      y: 200,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "top 50%",
        end: "top 35%",
        scrub: true,
      },
    });
  });
  return (
    <div
      style={{
        fontSize: "120px",
        fontWeight: 500,
        textAlign: "center",
        padding: "0 10vw",
        marginBottom: "20vw",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <span
          ref={main}
          style={{ display: "inline-block", textDecoration: "underline" }}
        >
          Designed in
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <span
          ref={text}
          style={{ display: "inline-block", textDecoration: "underline" }}
        >
          Amsterdam
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <span
          ref={text1}
          style={{ display: "inline-block", textDecoration: "underline" }}
        >
          handmade in Europe
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <span
          ref={text2}
          style={{ display: "inline-block", textDecoration: "underline" }}
        >
          personal in
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <span
          ref={text3}
          style={{ display: "inline-block", textDecoration: "underline" }}
        >
          all cities.
        </span>
      </div>
    </div>
  );
};
