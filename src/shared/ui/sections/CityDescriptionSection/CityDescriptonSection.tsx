import styles from "./CityDescriptionSection.module.scss";

export const CityDescriptionSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Forever Forward.</h1>
      <div className={styles.container}>
        <img
          style={{
            width: "20vw",
            position: "absolute",
            left: "3vw",
          }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2FLgDRKfb8zkohG74MeisqN%2F18c5a60a34f15e2e12d35f2e82efbc29%2FCity_collection_1_desktop.jpg&w=1920&q=75"
          alt=""
        />
        <img
          style={{
            width: "40vw",
            position: "absolute",
            top: "3vw",
            right: "5vw",
          }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2WMlGE53FoGEiTW9t3yTU1%2Ff2c7469c1de9a4b2ec9c77324b2518ea%2FcityW_desktop.png&w=1920&q=75"
          alt=""
        />

        <div className={styles.info}>
          Our women's bicycles are for everyone who likes to combine style with
          performance. In this range, available are the Café Racer and the
          Robyn, both frames with a lower tube, making it easy to step through.
        </div>
      </div>

      <div className={styles.container}>
        <img
          style={{
            width: "40vw",
            position: "absolute",
            left: "3vw",
            top: "3vw",
          }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4tHDOkjMdAFGOItMav5RI9%2F281d80484ca668712e55159ffc15bc4c%2Fcityov3_desktop.png&w=1920&q=75"
          alt=""
        />

        <img
          style={{
            width: "20vw",
            position: "absolute",
            right: "3vw",
            top: "6vw",
          }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F5I6jSwL1CWgaopwvcKJ6n5%2Ff21ab166a384b1222fca5c681c79331c%2FCity_collection_3_desktop.jpg&w=1920&q=75"
          alt=""
        />
        <img
          style={{
            width: "35vw",
            position: "absolute",
            top: "40vw",
            left: "30vw",
          }}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2FUkdKw15ch3sTgcALwCRH1%2Fb91384a4417967b931c5506fb94573e4%2F1G5A7367_FullSize_1.png&w=1920&q=75"
        />

        <div
          className={styles.info}
          style={{
            width: "30vw",
            top: "25vw",
            left: "50vw",
          }}
        >
          Whether you like it easy or fast, we got both. Our men's range of
          bicycles combine modern clean design with great quality, so they're
          perfect for your daily city commute. Our men citybikes are the
          Caféracer, Caféchaser and the Berlin, but feel free to opt for a
          women's bike for that easy hop-on-hop-off Amsterdam style.
        </div>
      </div>

      <h1 className={styles.title}>City bikes for everyone.</h1>
    </section>
  );
};
