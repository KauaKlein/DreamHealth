import { Link } from "react-router-dom";
import {
  FaThLarge,
  FaUserMd,
  FaUserInjured,
  FaCalendarAlt,
  FaSignOutAlt,
  FaSignInAlt,
  FaHome,
} from "react-icons/fa";
import { BotaoMode } from "../BotaoMode/BotaoMode.jsx";

export const NavMenu = () => {
  return (
    <div className="bg-[var(--color-primary)] text-white w-64 flex flex-col shadow-lg duration-700 ease-out">
      <div className="p-4 py-6 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">
          Dream<span className="text-[var(--color-text)] duration-700 ease-out">Health</span>
        </span>
      </div>

      <nav className="flex-grow p-4 space-y-2">
        <div className="text-white uppercase text-xs font-semibold mb-2 ml-4 ">
          Menu
        </div>

        <Link
          to="/"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaHome className="mr-3 text-lg" />
          Home
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaThLarge className="mr-3 text-lg" />
          Dashboard
        </Link>

        <Link
          to="/"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaUserMd className="mr-3 text-lg" />
          Médico
        </Link>
        <Link
          to="/consultar"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaUserInjured className="mr-3 text-lg" />
          Paciente
        </Link>
        <Link
          to="/"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaCalendarAlt className="mr-3 text-lg" />
          Agenda do Médico
        </Link>
        <Link
          to="/"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaCalendarAlt className="mr-3 text-lg" />
          Consulta do Paciente
        </Link>
        <Link
          to="/login"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaSignInAlt className="mr-3 text-lg" />
          Login
        </Link>
        <BotaoMode/>
      </nav>
      <div className="p-4 mt-auto">
        <Link
          to="/logout"
          className="flex items-center py-2 px-4 rounded-lg text-white hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-all duration-200 ease-in-out"
        >
          <FaSignOutAlt className="mr-3 text-lg" />
          Sair
        </Link>
      </div>
    </div>
  );
};
