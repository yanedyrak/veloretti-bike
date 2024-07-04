import styles from "./ExploreListSection.module.scss";
import { ExploreProduct } from "../../../../entities/exploreProduct/ExploreProduct";
export const ExploreListSection = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>Explore our bikes</h1>
      <div className={styles.container}>
        <ExploreProduct />
        <ExploreProduct />
        <ExploreProduct />
      </div>
    </div>
  );
};
