import React, { useState, useCallback } from "react";
import Popup from "./components/Popup";
import { themes, ThemeContext } from "./context";
import "./index.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const openPopup = () => setIsPopupOpen(!isPopupOpen);
  const setDarkTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={isDark ? themes.dark : themes.light}>
      <div
        style={{
          background: isDark ? themes.dark.background : themes.light.background,
          color: isDark ? themes.dark.foreground : themes.light.foreground,
        }}
        className="app"
      >
        <div>
          <Button onClick={openPopup}>
            {isPopupOpen ? "Close Popup" : "Open Popup"}
          </Button>
          <Button onClick={setDarkTheme}>
            {isDark ? "Set Light Theme" : "SetDarkTheme"}
          </Button>
        </div>
        <Counter />
        {isPopupOpen && <Popup />}
        <div>
          <Input
            onChange={useCallback((e) => setTitle(e.target.value), [])}
            type="text"
            placeholder="Title"
          />
          <p>Input value is: {title}</p>
          <Input
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <p>Input value is: {body}</p>
          <Button>Submit</Button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
