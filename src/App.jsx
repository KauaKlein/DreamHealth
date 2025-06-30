import { useEffect } from "react";
import { RoutesPage } from "./routes/RoutesPage";
import { useState } from "react";

export const BotaoMode = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkMode = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
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

function App() {
  useEffect(() => {
    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // Aplica o tema salvo
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Detecta a preferência do sistema
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  return (
    <>
      <RoutesPage />
    </>
  );
}

export default App;
