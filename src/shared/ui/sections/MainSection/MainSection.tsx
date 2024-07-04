import styles from "./MainSection.module.scss";
export const MainSection = ({ url }: { url: string }) => {
  return (
    <div style={{ backgroundImage: `url(${url})` }} className={styles.layout}>
      <div className={styles.container}>
        <p className={styles.description}>THE ELECTRIC SUMMER DEAL</p>
        <h1 className={styles.title}>Now $2.999</h1>
        <p className={styles.description}>Sun up. Price down</p>
      </div>
    </div>
  );
};
