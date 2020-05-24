import React, { useRef } from "react";

const Input = (props) => {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;

  return (
    <>
      <input
        // ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        // onKeyDown={props.onKeyDown}
      />
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
    </>
  );
};

export default React.memo(Input);
