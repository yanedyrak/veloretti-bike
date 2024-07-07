import { BikePhoto } from "../../../../entities/BikePhoto/BikePhoto";

export const KidsBikesPhotoSection = () => {
  return (
    <section
      style={{
        display: "flex",
        gap: "4vw",
        padding: "5vw",
        backgroundColor: "#B6B6B6",
        overflow: "scroll",
      }}
    >
      <BikePhoto />
      <BikePhoto />
      <BikePhoto />
    </section>
  );
};
