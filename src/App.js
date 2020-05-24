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
        <h1>useState, useEffect, useRef</h1>
        <div>
          <Button onClick={openPopup}>
            {isPopupOpen ? "Открыть попап" : "Закрыть попап"}
          </Button>
          <Button onClick={setDarkTheme}>
            {isDark ? "Светлая тема" : "Темная тема"}
          </Button>
        </div>
        <Counter />
        {isPopupOpen && <Popup />}
        <div>
          <h1>useCallback</h1>
          <Input
            onChange={useCallback((e) => setTitle(e.target.value), [])}
            type="text"
            placeholder="Title"
          />
          <p>Значение: {title}</p>
          <Input
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <p>Значение: {body}</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
