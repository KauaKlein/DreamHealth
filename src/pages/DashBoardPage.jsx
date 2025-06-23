

import { FaUserMd,FaUserInjured,FaCalendarAlt,FaChartBar, } from 'react-icons/fa'; 


export const DashBoardPage = () => { 
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      <div className="flex-grow p-6">
     
        
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