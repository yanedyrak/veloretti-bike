import styles from "./BikePhoto.module.scss";
export const BikePhoto = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F6fP7fWISPaj2LhmQTk5HAe%2F44171ad5646252b3d5949330da1bd753%2FKids-slider-maxi.jpg&w=1920&q=75"
        alt=""
      />
      <div className={styles.info}>
        <h3 className={styles.name}>Junior</h3>
        <p className={styles.description}>{"(3 - 6 years)"}</p>
      </div>
    </div>
  );
};
