import styles from "./ReviewsSection.module.scss";
import { Review } from "../../review/Review";
export const ReviewsSection = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>They're talking about us</h1>
      <div className={styles.container}>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};
