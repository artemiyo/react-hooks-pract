import React, { useRef } from "react";

const Input = (props) => {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
      <p>
        Компоненты "Input" перерисовывается {componentRerenderedTimes.current}{" "}
        раз
      </p>
    </>
  );
};

export default React.memo(Input);
