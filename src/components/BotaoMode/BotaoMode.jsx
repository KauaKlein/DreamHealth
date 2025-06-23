import { useState } from "react";

export const BotaoMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if(darkMode){
        document.documentElement.classList.remove("dark");
    }else{
        document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      className="w-15 h-15 rounded bg-[var(--color-primary)] text-3xl text-white flex items-center justify-center"
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};