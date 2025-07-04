import { Outlet } from "react-router-dom";
import { NavMenu } from "./NavMenu";

export const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <NavMenu />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
