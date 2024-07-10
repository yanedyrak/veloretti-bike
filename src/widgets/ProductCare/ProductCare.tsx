import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { change } from "../../shared/store/careSlice";
import styles from "./ProductCare.module.scss";
export const ProductCare = ({
  price,
  title,
  plusList,
  popular,
}: {
  price: number;
  title: string;
  plusList: string[];
  popular?: boolean;
}) => {
  const titleFromStore = useAppSelector((state) => state.care.title);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(change({ price, title }))}
      className={styles.container}
      style={{
        border:
          titleFromStore === title ? "1px solid black" : "1px solid #E5E5E5",
      }}
    >
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
