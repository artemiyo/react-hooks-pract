import React, { useState, useMemo } from "react";
import Button from "./Button";

const Counter = (props) => {
  console.log("COUNTER");
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const incrementFirst = () => setFirstCount(firstCount + 1);
  const incrementSecond = () => setSecondCount(secondCount + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return firstCount % 2 === 0;
  }, [firstCount]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <Button onClick={incrementFirst}>
        Increase First Button - {firstCount}
      </Button>
      <span>{isEven ? " Even" : " Odd"}</span>
      <Button onClick={incrementSecond}>
        Increase Second Button - {secondCount}
      </Button>
    </div>
  );
};

export default React.memo(Counter);
