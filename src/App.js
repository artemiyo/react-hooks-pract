import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import CounterReducer from "./CounterReducer";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting />
      <CounterReducer />
    </div>
  );
}

export default App;
