import styles from "./BikeAccessory.module.scss";
export const BikeAccessory = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.image}>
        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4A4eBVLadmIJhuTFBpowvp%2F0f006493dec99cc2e75de9f973781e04%2FFront_carrier_matte_black__thumbnail_desktop.jpg&w=1080&q=75"
          alt=""
        />
      </div>
      <div className={styles.description}>
        <p className={styles.price}>+$ 50.42</p>
        <h3 className={styles.title}> Front Carrier</h3>
      </div>
    </div>
  );
};
