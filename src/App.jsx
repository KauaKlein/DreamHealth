import { useEffect } from "react";
import { RoutesPage } from "./routes/RoutesPage"

function App() {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <RoutesPage/>
    </>
  )
}

export default App
