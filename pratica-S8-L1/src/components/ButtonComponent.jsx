const Button = function (props) {
  console.log(props);
  return (
    <div style={{ margin: props.margin, textAlign: "center" }}>
      <button type="button" className=" btn ">
        {props.btnTitle}
      </button>
    </div>
  );
};

export default Button;
