const style = {
  width: "48px",
  height: "48px",
  border: "5px solid #FFF",
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: "rotation 1s linear infinite",
};

const Loader = () => {
  return <span style={style}></span>;
};

export default Loader;
