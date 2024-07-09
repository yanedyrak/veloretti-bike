import styles from "./ProductCare.module.scss";
export const ProductCare = ({
  price,
  title,
  plusList,
  popular,
}: {
  price: string;
  title: string;
  plusList: string[];
  popular?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <p className={styles.price}>+$ {price} / year</p>

          <h3 className={styles.title}>{title}</h3>
        </div>

        {popular ? <div className={styles.popular}>Popular Choice</div> : null}
      </div>
      <ul className={styles.list}>
        {plusList.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
