

import { FaUserMd,FaUserInjured,FaCalendarAlt,FaChartBar, } from 'react-icons/fa'; 


export const DashBoardPage = () => { 
  return (
    <div className="min-h-screen flex font-sans">
      <div className="flex-grow p-6">
     
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mb-6">


            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-[var(--color-text)] text-sm">Médicos</div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">14</div>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaUserMd className="h-7 w-7" />
              </div>
            </div>

            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-[var(--color-text)] text-sm">Pacientes</div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">1</div>
              </div>
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <FaUserInjured className="h-7 w-7" />
              </div>
            </div>

            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-4 flex items-center justify-between transition-transform transform hover:scale-105 duration-200">
              <div>
                <div className="text-[var(--color-text)] text-sm">Consultas</div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">3</div>
              </div>
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                <FaCalendarAlt className="h-7 w-7" />
              </div>
            </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">Usuários Cadastrados:</h3>
              <div className="h-64 rounded-md flex items-center justify-center ">
           
                <FaChartBar className="text-5xl text-[var(--color-text-secondary)]" />
              </div>
            </div>
                </div>
              </div>
            </div>

   
  );
};