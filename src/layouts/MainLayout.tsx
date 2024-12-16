import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center min-h-screen bg-neutral-400 justify-between">
        <div className="w-full flex justify-between">
          <div className="justify-center items-center flex ml-3">Logo.calc</div>
          <nav className="mb-5 mt-5 w-full justify-end flex">
            <NavLink
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Main
            </NavLink>
            <NavLink
              to="/calculator"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3 mr-3"
            >
              Calculator
            </NavLink>
          </nav>
        </div>
        <div className="pt-5 w-full h-full flex items-start justify-center align-top bg-amber-300">
          <Outlet></Outlet>
        </div>
        <footer>footer</footer>
      </div>
    </div>
  );
}
export default MainLayout;
