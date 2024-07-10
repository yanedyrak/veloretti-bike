export const Color = ({
  value,
  isActive,
}: {
  value: string;
  isActive?: boolean;
}) => {
  return isActive ? (
    <div
      style={{
        outline: "1px solid black",
        padding: "5px",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: value,
        }}
      ></div>
    </div>
  ) : (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: value,
      }}
    ></div>
  );
};
