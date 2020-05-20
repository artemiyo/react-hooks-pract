import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting />
    </div>
  );
}

export default App;
