import { useRef } from "react";
import { Product } from "../../entities/product/Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Products = () => {
  const productList = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(productList.current, {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: productList.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });
  return (
    <div>
      <div
        ref={productList}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 10vw",
          overflow: "hidden",
          marginBottom: "20vw",
        }}
      >
        <Product />
        <Product />
      </div>
    </div>
  );
};
