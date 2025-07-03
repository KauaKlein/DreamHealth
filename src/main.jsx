import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
  //REMOVER STRICTMODE NO FINAL, ele faz o useEffect rodar DUAS VEZES!!!! (por isso o console.log ta duplicado)
);
