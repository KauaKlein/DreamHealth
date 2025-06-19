import { Outlet } from 'react-router-dom';
import { NavMenu } from './NavMenu'; 

export const Layout = () => {
  return (
  
    <div className="min-h-screen flex">
      <NavMenu /> 
      <main className="flex-1 bg-gray-50 p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

    </div>
  );
};  