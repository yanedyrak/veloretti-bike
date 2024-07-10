import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { add, remove } from "../../shared/store/accessoriesSlice";
import styles from "./BikeAccessory.module.scss";
export const BikeAccessory = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  const accessories = useAppSelector((state) => state.accessories.value);
  const dispatch = useAppDispatch();
  return accessories.find((item) => item.title === title) ? (
    <div
      onClick={() =>
        accessories.find((item) => item.title === title)
          ? dispatch(remove({ title: title, price: price, image: image }))
          : dispatch(add({ title: title, price: price, image: image }))
      }
      className={styles.layout}
      style={{ border: "1px solid black" }}
    >
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.price}>+$ {price}</p>
        <h3 className={styles.title}> {title}</h3>
      </div>
    </div>
  ) : (
    <div
      onClick={() =>
        accessories.find((item) => item.title === title)
          ? dispatch(remove({ title: title, price: price, image: image }))
          : dispatch(add({ title: title, price: price, image: image }))
      }
      className={styles.layout}
    >
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.price}>+$ {price}</p>
        <h3 className={styles.title}> {title}</h3>
      </div>
    </div>
  );
};
