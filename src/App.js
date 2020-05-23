import React, { useState } from "react";
import Popup from "./components/Popup";
import { themes, ThemeContext } from "./context";
import "./index.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
          <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
            {isPopupOpen ? "Close Popup" : "Open Popup"}
          </button>
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? "Set Light Theme" : "SetDarkTheme"}
          </button>
        </div>
        {isPopupOpen && <Popup />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
