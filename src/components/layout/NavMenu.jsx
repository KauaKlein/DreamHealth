import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaThLarge,
  FaUserMd,
  FaUserInjured,
  FaCalendarAlt,
  FaSignOutAlt,
  FaSignInAlt,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BotaoMode } from "../BotaoMode/BotaoMode.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <>
      {/* Botão de menu (só aparece em telas pequenas) */}
      <div className={`min-[769px]:hidden p-4 fixed text-white flex justify-between items-center z-50 top-2 left-2 ${!menuOpen ? "bg-[var(--color-primary)]" : "bg-none"} rounded-xl duration-0`}>
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu lateral (escondido em mobile se menuOpen for false) */}
      
      <div
        className={`bg-[var(--color-primary)] text-white w-64 flex flex-col shadow-lg fixed top-0 left-0 h-full transform transition-transform duration-400
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} min-[769px]:translate-x-0 min-[769px]:static min-[769px]:h-auto`}
      >
        <div className={`p-4 py-6 flex flex-col items-center justify-center ${menuOpen ? "mt-10" : "mt-0"}`}>
          <span className="text-3xl font-bold">
            Dream<span className="text-[var(--color-text)]">Health</span>
          </span>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          <div className="text-white uppercase text-xs font-semibold mb-2 ml-4">
            Menu
          </div>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaHome className="mr-3 text-lg" />
            Home
          </Link>

          <Link to="/dashboard" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaThLarge className="mr-3 text-lg" />
            Dashboard
          </Link>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaUserMd className="mr-3 text-lg" />
            Médico
          </Link>

          <Link to="/consultar" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaUserInjured className="mr-3 text-lg" />
            Paciente
          </Link>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaCalendarAlt className="mr-3 text-lg" />
            Agenda do Médico
          </Link>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaCalendarAlt className="mr-3 text-lg" />
            Consulta do Paciente
          </Link>

          <Link to="/login" className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-400">
            <FaSignInAlt className="mr-3 text-lg" />
            Login
          </Link>

          
        </nav>

        <div className="p-4 mt-auto">
          <Link to="/logout" className="menu-link">
            <FaSignOutAlt className="mr-3 text-lg" />
            Sair
          </Link>
        </div>
      </div>
      <BotaoMode />
    </>
  );
};
