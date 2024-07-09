import { Carousel } from "antd";
import "./ProductSwiper.scss";
export const ProductSwiper = () => (
  <>
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "0 2vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Carousel dots arrows infinite={false}>
        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F3xwT46EQjsAimW3NDvrRHH%2Fbe9572821ad1eb0a1cb32a127c230b6f%2FAce_Two_Matte_Black_NEW.png&w=3840&q=75"
          alt=""
        />

        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F4AwTxMu2tOFfxywNVTSNNL%2F7196edcb2c2a8bc08e515f2cdfa95859%2FAce_Two_Matte_Black_2_NEW.png&w=3840&q=75"
          alt=""
        />

        <img
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F15jOxr0oAbQWzxEh66WUwb%2Fb8201e0547a94c310cd6b8a31904a8a1%2FAce_Two_Matte_Black_3_NEW.png&w=3840&q=75"
          alt=""
        />
      </Carousel>
    </div>
  </>
);
