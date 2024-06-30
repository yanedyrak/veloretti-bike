import styles from "./HeroSection.module.scss";
export const HeroSection = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <p>VELORETTI BUSINESS</p>
        <h1>Bike lease plan for employees.</h1>
      </div>
    </div>
  );
};
