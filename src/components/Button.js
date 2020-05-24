import React from "react";

const Button = (props, ref) => {
  return (
    <button style={{ width: "200px", height: "30px" }} ref={ref} {...props}>
      {props.children}
    </button>
  );
};

export default React.forwardRef(Button);
