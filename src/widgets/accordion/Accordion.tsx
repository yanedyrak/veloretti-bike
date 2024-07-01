import { useGSAP } from "@gsap/react";
import type { CollapseProps } from "antd";
import { Collapse, ConfigProvider } from "antd";
import gsap from "gsap";
import { useRef } from "react";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What about the paperwork?",
    children: (
      <p style={{ fontSize: 14 }}>
        The bicycle plan is set up so that there will be no administrative work
        on your part as the employer. You can use a free online platform that
        has been created by our leasing partner. This provides you with a simple
        overview of your business and your employees, allowing you to arrange
        everything. It also simplifies all the paperwork. Everything is
        organised with just a few clicks.
      </p>
    ),
    showArrow: false,
  },
  {
    key: "2",
    label: "How does it work with an employee who retires early?",
    children: (
      <p style={{ fontSize: 14 }}>
        In case an employee retires early, we will return the bike to the
        company. The employee will receive a refund for the remaining lease
        period.
      </p>
    ),
    showArrow: false,
  },
  {
    key: "3",
    label: "What does a Veloretti Bike Plan cost for an employer?",
    children: (
      <p style={{ fontSize: 14 }}>
        Veloretti Bike Plan for an employer costs 100€ per month.
      </p>
    ),
    showArrow: false,
  },

  {
    key: "4",
    label:
      "How is the insurance & maintenance arranged when leasing a Veloretti bike?",
    children: (
      <p style={{ fontSize: 14 }}>
        When leasing a Veloretti bike, the insurance and maintenance are
        arranged by Veloretti. This is included in the monthly fee. You don't
        have to worry about anything.
      </p>
    ),
    showArrow: false,
  },

  {
    key: "5",
    label: "What are the legal requirements for the Veloretti bicycle plan?",
    children: (
      <p style={{ fontSize: 14 }}>
        To use the Veloretti bicycle plan, you must comply with the following
        legal requirements. It's important to note that the company must be
        registered as a legal entity and meet certain criteria regarding the
        number of employees, the number of employees per shift, and the number
        of employees per year. These requirements are designed to ensure that
        the employer is legally able to lease bicycles to their employees.
      </p>
    ),
    showArrow: false,
  },
];

export const Accordion = () => {
  const head = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    gsap.from(head.current, {
      y: 200,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: head.current,
        start: "top 80%",
        end: "top 30%",
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
            fontSize: 24,
          },
        },
      }}
    >
      <div
        style={{
          padding: "20vw",
          overflow: "hidden",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <h1
            ref={head}
            style={{
              fontSize: 120,
              fontWeight: "300",
              paddingBottom: "3vw",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            Any questions?
          </h1>
        </div>
        <Collapse
          style={{
            marginTop: "3vw",
            zIndex: 2,
          }}
          defaultActiveKey={1}
          onChange={onChange}
          items={items}
        />
      </div>
    </ConfigProvider>
  );
};

export default Accordion;
