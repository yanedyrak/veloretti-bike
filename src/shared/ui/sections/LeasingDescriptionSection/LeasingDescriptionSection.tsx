import { Link } from "react-router-dom";
import styles from "./LeasingDescriptionSection.module.scss";
import { BikesListSection } from "../BikesListSection/BikesListSection";
import { Accordion } from "../../../../widgets/accordion/Accordion";

export const LeasingDescriptionSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2yleMUIHOQ0isXNS56mZnN%2Fe0aee58ad242cecb081cef51ded540ad%2FLeaseImg2_desktop.png&w=1920&q=75"
          alt="description photo"
        />

        <div className={styles.info}>
          <h1 className={styles.title}>Lease bikes</h1>
          <p className={styles.description}>
            Want to offer your employees the great perk of stylish and
            sustainable mobility? In the Netherlands, this is super easy with a
            bike plan. It’s cost-free for employers and outside of the
            work-related costs scheme (WKR).
          </p>
          <Link to="/" className={styles.link}>
            Learn More
          </Link>
        </div>
      </div>
      <div className={styles.photo}></div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2SON7mbn6HW911uaCLJLuw%2F47f560e74e5725d55b4bd844712704cf%2Fleasing_sec3_desktop.png&w=1920&q=75"
          alt="description photo"
        />

        <div className={styles.info}>
          <h1 className={styles.title}>Free of charge for employers</h1>
          <p className={styles.description}>
            As an employer, you can offer the bike plan free of charge. It’s
            your choice to make a contribution towards the employee's lease
            costs or take on the full lease costs.
          </p>
          <Link to="/" className={styles.link}>
            Cost for example
          </Link>
        </div>
      </div>
      <div
        className={styles.container}
        style={{ position: "relative", padding: "60vw 0" }}
      >
        <img
          className={styles.image}
          style={{ position: "absolute", top: "30vw", left: "5vw" }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4tHDOkjMdAFGOItMav5RI9%2F281d80484ca668712e55159ffc15bc4c%2Fcityov3_desktop.png&w=1920&q=75"
          alt="description photo"
        />
        <img
          className={styles.image}
          style={{
            position: "absolute",
            top: "75vw",
            right: "10vw",
            width: "45vw",
          }}
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D"
          alt="description photo"
        />
        <img
          className={styles.image}
          style={{ position: "absolute", top: "10vw", right: "10vw" }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F9u8VUYMNFon2t4PV9Bz4T%2Fcd8e3eb2a79b732d38d65e5806fd7214%2FLeaseImg5_desktop.png&w=1920&q=75"
          alt="description photo"
        />
      </div>
      <BikesListSection />

      <Accordion />
    </section>
  );
};
