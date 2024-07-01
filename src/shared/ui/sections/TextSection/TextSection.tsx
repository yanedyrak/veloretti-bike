import { useRef } from "react";
import styles from "./TextSection.module.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import imgLeft from "./imgLeft.png";
import imgRight from "./imgRight.png";
const data = [
  {
    name: "Register your company",
    text: "Fill in our registration form with your company details. After your registration, our leasing partner will do a credit check. You will hear whether your application has been approved within 24 hours.",
  },
  {
    name: "Determine the requirements",
    text: "You get access to the digital platform. Set the requirements for your employees and share the registration link",
  },
  {
    name: "Ride your bike!",
    text: "Lets go! Your employees can choose their bikes and they will be delivered straight to their homes.",
  },
  {
    name: "Administration",
    text: "Everything in one place. The digital platform gives you an easy overview of all the information for your payroll.",
  },
];
export const TextSection = () => {
  const services = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(services.current, {
      y: -450,

      scrollTrigger: {
        trigger: services.current,
        start: "top 130%",
        end: "top 15%",
        scrub: true,
      },
    });
  });
  return (
    <div ref={services}>
      <div className={styles.layout}>
        <div className={styles.services}>
          <h2>Service, maintenance and insurance</h2>
          <p>
            The lease includes an all-in service package. Throughout the entire
            36 months, you are fully insured against damage, theft and
            maintenance. In addition, you always have access to roadside
            assistance.
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoCharge}>
          <img src={imgLeft} alt="" />
          <div className={styles.infoText}>
            <h2>Free of charge for employers</h2>
            <p>
              The bike plan is totally independent of the WKR and is free for
              you as an employer. The employee pays the lease costs and you, as
              the employer, decide whether you want to contribute to the costs.
            </p>
          </div>
        </div>
        <div className={styles.infoAboutWork}>
          <div className={styles.infoList}>
            <h2>How it works</h2>
            {data.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <img src={imgRight} alt="" />
        </div>
      </div>
    </div>
  );
};
