import styles from "./ProductChoice.module.scss";
export const ProductChoice = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>Electric Two</h3>
        <p className={styles.price}>$2.999</p>
      </div>
      <div className={styles.models}>
        <h3 className={styles.title}>Choose a model </h3>
        <div className={styles.modelList}>
          <div className={styles.model}>
            <div className={styles.modelImage}>
              <img
                src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75"
                alt=""
              />
            </div>

            <p className={styles.modelName}>Electric Two</p>
          </div>
        </div>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.title}>Choose a color</h3>
        <div className={styles.colorList}>
          <div className={styles.active}>
            <div
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#595959",
            }}
          ></div>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "gray",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
