

import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge,FaUserMd,FaUserInjured,FaCalendarAlt,FaSignOutAlt,FaSignInAlt,FaChartBar, } from 'react-icons/fa'; 


export const DashBoardPage = () => { 
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">

      <aside className="bg-indigo-900 text-white w-64 flex flex-col shadow-lg">
        <div className="p-4 py-6 flex flex-col items-center justify-center border-b border-indigo-800">
          <span className="text-3xl font-bold">Dream<span className="text-indigo-300">Health</span></span>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <div className="text-gray-300 uppercase text-xs font-semibold mb-2 ml-4">Menu</div>
          
    
          <Link to="/dashboard" className="flex items-center py-2 px-4 rounded-lg bg-indigo-700 text-white shadow-md transition-all duration-200 ease-in-out">
            <FaThLarge className="mr-3 text-lg" />
            Dashboard
          </Link>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaUserMd className="mr-3 text-lg" />
            Médico
          </Link>
          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaUserInjured className="mr-3 text-lg" />
            Paciente
          </Link>
          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaCalendarAlt className="mr-3 text-lg" />
            Agenda do Médico
          </Link>
          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaCalendarAlt className="mr-3 text-lg" />
            Consulta do Paciente
          </Link>
          <Link to="/login" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaSignInAlt className="mr-3 text-lg" />
            Deslogar
          </Link>
        </nav>
        <div className="p-4 mt-auto border-t border-indigo-800">
          <Link to="/logout" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaSignOutAlt className="mr-3 text-lg" />
            Sair
          </Link>
        </div>
      </aside>

 
      <div className="flex-grow p-6">
     
        <header className="bg-white shadow-md p-4 flex justify-between items-center mb-6 rounded-lg">
          <div className="flex items-center">
          </div>
        </header>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mb-6">


            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-gray-500 text-sm">Médicos</div>
                <div className="text-3xl font-bold text-gray-800">14</div>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaUserMd className="h-7 w-7" />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-gray-500 text-sm">Pacientes</div>
                <div className="text-3xl font-bold text-gray-800">1</div>
              </div>
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <FaUserInjured className="h-7 w-7" />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-gray-500 text-sm">Consultas</div>
                <div className="text-3xl font-bold text-gray-800">3</div>
              </div>
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                <FaCalendarAlt className="h-7 w-7" />
              </div>
            </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Usuários Cadastrados:</h3>
              <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400">
           
                <FaChartBar className="text-5xl text-gray-300" />
              </div>
            </div>
                </div>
              </div>
            </div>

   
  );
};