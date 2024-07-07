import styles from "./KidsPhotoSection.module.scss";
export const KidsPhotoSection = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>You look good together.</h1>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage: `url(https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3KKbOswmGgRK7JhA47p6oE%2Fdcafe12a055be0bbf68e0cab2d9e9d97%2Fimage.png&w=1920&q=75)`,
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        >
          @simplicite_ici
        </div>
        <div
          style={{
            backgroundImage: `url(https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F53p2XUE2FuqPisYtOoqkAv%2F559588d998fc8f913f9bad94ae44f13f%2Fimage.png&w=1920&q=75)`,
            gridRowStart: 3,
            gridRowEnd: 5,
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        >
          @lukerdmartin
        </div>
        <div
          style={{
            backgroundImage: `url(https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F2itHp4frVfNE2C2CCX01C2%2F78ab281ee80f50113b0e36196c193f43%2Fimage.png&w=1920&q=75)`,
            gridRowStart: 1,
            gridRowEnd: 5,
            gridColumnStart: 4,
            gridColumnEnd: 6,
          }}
        >
          @lizeprinss
        </div>
        <div
          style={{
            backgroundImage: `url(https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4AaspRErjJIIgfQW6deude%2Ff850dee9caf02a084b71a67909e36f59%2Fimage.png&w=1920&q=75)`,
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 6,
            gridColumnEnd: 9,
          }}
        >
          @simplicite_ici
        </div>
        <div
          style={{
            backgroundImage: `url(https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2Fb2HbcmvkSpb87sNUjTE7H%2F49d03674a38e5e96dc95d5f3a40a523d%2Fimage.png&w=1920&q=75)`,
            gridRowStart: 3,
            gridRowEnd: 5,
            gridColumnStart: 6,
            gridColumnEnd: 9,
          }}
        >
          @wissamxo
        </div>
      </div>
    </div>
  );
};
