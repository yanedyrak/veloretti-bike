import styles from "./PhotoSection.module.scss";
export const PhotoSection = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>You look good together.</h1>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F7n8gg1poVpG820fiOcm9kA%2F2d976129e10eedea3eb0dd28f557a51e%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3,
          }}
        >
          @wouterkann
        </div>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F01anrcdhZgcYsnzFvXgfnq%2F24863bea526e4404f94392e833c5fb2c%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 3,
            gridRowEnd: 5,
          }}
        >
          @carlanicieza
        </div>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2SGsmgZGAUJoaVZ5pNQOxy%2F154982a030fa3512f5d4ecb2642fa8ef%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 3,
            gridColumnEnd: 6,
            gridRowStart: 1,
            gridRowEnd: 5,
          }}
        >
          @mr.rooftop
        </div>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3A83DoxmB3PMwiM5qLNblC%2F30e428eeebdfb370dafcabd1ad7031f1%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 6,
            gridColumnEnd: 9,
            gridRowStart: 1,
            gridRowEnd: 4,
          }}
        >
          @athenadb
        </div>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F60XAPOVoZkGu2udQFN9OYh%2Fba8717ae63313ef456898b7337644529%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 6,
            gridColumnEnd: 7,
            gridRowStart: 4,
            gridRowEnd: 5,
          }}
        >
          @ap.notte
        </div>
        <div
          style={{
            backgroundImage: `url("https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F1q5yc6Dtdsd3jFsBMpacpU%2Fe2736f0affa4b863d65c1d105a2a970e%2Fimage.png&w=3840&q=75")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            gridColumnStart: 7,
            gridColumnEnd: 9,
            gridRowStart: 4,
            gridRowEnd: 5,
          }}
        >
          @mathildenauta
        </div>
      </div>
    </div>
  );
};
