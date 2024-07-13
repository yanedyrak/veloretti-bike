import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { setColor } from "../../shared/store/colorSlice";

export const Color = ({ value }: { value: string }) => {
  const colorFromState = useAppSelector((state) => state.color.value);
  const dispatch = useAppDispatch();
  colorFromState === "" && dispatch(setColor(value));
  return colorFromState === value ? (
    <div
      style={{
        outline: "1.5px solid black",
        padding: "5px",
        borderRadius: "50%",
      }}
    >
      <div
        onClick={() => dispatch(setColor(value))}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: value,
          cursor: "pointer",
        }}
      ></div>
    </div>
  ) : (
    <div
      onClick={() => dispatch(setColor(value))}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: value,
        cursor: "pointer",
      }}
    ></div>
  );
};
