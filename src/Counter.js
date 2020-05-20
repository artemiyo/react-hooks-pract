import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
      <p>You clicked {count} time</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default Counter;
