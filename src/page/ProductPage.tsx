import { ProductSwiper } from "../widgets/productSwiper/productSwiper";
import { ProductChoice } from "../widgets/productChoice/ProductChoice";
import { ProductNavbar } from "../widgets/navbar/ProductNavbar";

export const ProductPage = () => {
  return (
    <>
      <ProductNavbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "65% 35%",
        }}
      >
        <ProductSwiper />
        <ProductChoice />
      </div>
    </>
  );
};
