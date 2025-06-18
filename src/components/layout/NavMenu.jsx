import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import { LinksRoutes } from "../links/LinksRoutes";

export const NavMenu = () => {
  return (
    <header className="flex flex-row justify-center items-center bg-[var(--color-nav)] sticky top-0 z-40 w-dvw h-[11%]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold text-[var(--color-primary)]">
            DreamHealth
          </Link>

          <LinksRoutes />

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hidden sm:flex items-center justify-center px-2.5 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded lg-1x1 hover:bg-gray-100 transition-colors"
            >
              <FaUserCircle className="mr-2" />
              Login
            </Link>
            <Link
              to="/cadastro"
              className="flex items-center justify-center px-4 py-2 font-semibold text-white bg-[var(--color-primary)] border border-transparent rounded lg-1x1 hover:bg-[var(--color-hover)] transition-all duration-300"
            >
              DashBoard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
