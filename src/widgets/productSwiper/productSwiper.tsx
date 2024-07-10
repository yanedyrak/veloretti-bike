import { Carousel } from "antd";
import "./ProductSwiper.scss";
import { Color } from "../../shared/types/Product";
import { useAppSelector } from "../../shared/hooks/useAppSelector";

export const ProductSwiper = ({ colors }: { colors: Color[] }) => {
  const colorFromState = useAppSelector((state) => state.color.value);
  const images = colors.filter((item) => item.value === colorFromState)[0]
    .images;
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          padding: "0 4vw",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Carousel dots arrows infinite={false}>
          {images.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </Carousel>
      </div>
    </>
  );
};
