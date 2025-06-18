import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";

export const NavMenu = () => {
  return (
    <header className="bg-white/95 sticky top-0 z-40 border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold text-indigo-600">
            DreamHealth
          </Link>

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
              className="flex items-center justify-center px-4 py-2 font-semibold text-white bg-indigo-600 border border-transparent rounded lg-1x1 hover:bg-indigo-700 transition-all duration-300"
            >
              DashBoard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
