import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center h-screen bg-neutral-400 justify-between">
        <nav className="mb-5 mt-5 w-full justify-end flex">
          <NavLink to="/">Main</NavLink>
          <NavLink to="/calculator" className="pl-3 pr-3">
            Calculator
          </NavLink>
        </nav>
          <div className="w-full h-full flex items-start justify-center align-top bg-amber-300">
        <Outlet></Outlet>
          </div>
          <footer>footer</footer>
      </div>
    </div>
  );
}
export default MainLayout;
