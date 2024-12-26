import {Link, NavLink, Outlet} from "react-router-dom";
import {useState} from "react";

function MainLayout() {
  const [burgerOpen, setBurgerOpen] = useState("hidden");
  function toggleNav() {
    if (burgerOpen === "hidden") {
     setBurgerOpen("visible");
    } else {setBurgerOpen("hidden");}
  }
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center min-h-screen justify-between">
        <div className="w-full flex justify-between">
          <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo.calc</span>
              </Link>
              <button onClick={()=> toggleNav()}
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
              <div className={`${burgerOpen} w-full md:block md:w-auto`}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink to="/"
                       className="block py-2 px-3 rounded hover:bg-blue-200 md:hover:bg-white md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700 md:dark:text-blue-500"
                       aria-current="page">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/calculator"
                       className="block py-2 px-3 text-gray-900 rounded md:border-0 hover:bg-blue-200 md:hover:bg-white md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Calculator</NavLink>
                  </li>
                </ul>
              </div>
            </div>
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
