import { useState } from "react";

export const BotaoMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center justify-center">
      <button
        className="w-15 h-15 rounded-xl bg-[var(--color-primary)] text-3xl text-white flex items-center justify-center duration-500"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};
