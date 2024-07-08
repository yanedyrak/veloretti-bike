import { useGSAP } from "@gsap/react";

import { Collapse, ConfigProvider } from "antd";
import gsap from "gsap";
import { useRef } from "react";
import { items } from "./items";

export const Accordion = () => {
  const head = useRef<HTMLHeadingElement>(null);
  const accordion = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(head.current, {
      y: 300,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: head.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.from(accordion.current, {
      y: 500,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: head.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerBg: "#f9f9f9",
            colorBorder: "none",
            fontSize: 40,
          },
        },
      }}
    >
      <div
        style={{
          padding: "20vw",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <h1
            ref={head}
            style={{
              fontSize: "8vw",
              fontWeight: "400",
              paddingBottom: "3vw",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            Any questions?
          </h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Collapse
            ref={accordion}
            style={{
              marginTop: "3vw",
              zIndex: 2,
            }}
            defaultActiveKey={1}
            onChange={onChange}
            items={items}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Accordion;
