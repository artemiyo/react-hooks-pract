import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      onKeyDown={props.onKeyDown}
    />
  );
});

export default Input;
