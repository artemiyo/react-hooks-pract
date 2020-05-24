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
      <h1>useMemo</h1>
      <Button onClick={incrementFirst}>
        Увеличить firstCount - {firstCount}
      </Button>
      <span>{isEven ? " Четное" : " Нечетное"}</span>
      <Button onClick={incrementSecond}>
        Увеличить secondCount - {secondCount}
      </Button>
    </div>
  );
};

export default React.memo(Counter);
