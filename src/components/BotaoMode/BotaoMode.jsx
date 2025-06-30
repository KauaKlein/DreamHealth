import { useState } from "react";

export const BotaoMode = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkMode = savedTheme
    ? savedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);

    // Atualiza o tema no localStorage
    localStorage.setItem("theme", newTheme);

    // Aplica ou remove a classe "dark" no <html>
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
