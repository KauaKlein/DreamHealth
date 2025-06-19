
import { Link } from 'react-router-dom';
import { FaThLarge,FaUserMd,FaUserInjured,FaCalendarAlt,FaSignOutAlt,FaSignInAlt,FaHome } from 'react-icons/fa'; 

export const NavMenu = () => {
 return( 
      <div className="bg-indigo-900 text-white w-64 flex flex-col shadow-lg">
        <div className="p-4 py-6 flex flex-col items-center justify-center border-b border-indigo-800">
          <span className="text-3xl font-bold">Dream<span className="text-indigo-300">Health</span></span>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <div className="text-gray-300 uppercase text-xs font-semibold mb-2 ml-4">Menu</div>
          
    
          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaHome className="mr-3 text-lg" />
            Home
          </Link>
          <Link to="/dashboard" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaThLarge className="mr-3 text-lg" />
            Dashboard
          </Link>

          <Link to="/" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaUserMd className="mr-3 text-lg" />
            Médico
          </Link>
          <Link to="/consultar" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
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
            Login
          </Link>
         
        </nav>
        <div className="p-4 mt-auto border-t border-indigo-800">
          <Link to="/logout" className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-all duration-200 ease-in-out">
            <FaSignOutAlt className="mr-3 text-lg" />
            Sair
          </Link>
        </div>
      </div>
      );
};
