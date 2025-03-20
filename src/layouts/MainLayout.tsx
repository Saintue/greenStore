import {Link, NavLink, Outlet} from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../stores/authStore.ts";
import { useLocation, matchPath } from 'react-router-dom';

function MainLayout() {
  const useActiveRoute = (path:string):boolean => {
    const location = useLocation();
    return matchPath(location.pathname, path) !== null;
  };
  const [burgerOpen, setBurgerOpen] = useState("hidden");
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const isShopCalculatorActive = useActiveRoute('/shopCalculator');

  function toggleNav() {
    if (burgerOpen === "hidden") {
      setBurgerOpen("visible");
    } else {
      setBurgerOpen("hidden");
    }
  }


  return (
    <div className="flex justify-center">
        <div className="w-full md:w-3/4 flex flex-col items-center min-h-screen justify-between">
        <div className="w-full flex justify-between">
          <nav className="bg-[#0E3021] border-gray-200 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                to="/shopCalculator/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="text-2xl text-white bg-[#54755A] px-2 py-2 rounded-2xl whitespace-nowrap">
                  Logo.calc
                </span>
              </Link>
              <button
                onClick={() => toggleNav()}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              {

                <div className={`${burgerOpen} w-full md:block md:w-auto`}>
                  <div className="pt-2 md:hidden md:pt-0 h-[1px] border-b border-white"></div>
                  <ul className="font-medium flex flex-col bg-[#0E3021] p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
                    <li>
                      <Link
                        to="/shopCalculator/"
                        className={`block my-1 py-1 px-3 text-white rounded-2xl bg-[#54755A] hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center min-w-[80px] max-w-[112px] ${isShopCalculatorActive?"active":""} `}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="calculator"
                        className="block my-1 py-1 px-3 text-white rounded-2xl bg-[#54755A] md:border-0 hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center min-w-[80px] max-w-[112px]"
                      >
                        Catalog
                      </NavLink>
                    </li>
                    {isAuth ? (
                      <></>
                    ) : (
                      <li>
                        <NavLink
                          to="signin"
                          className="block my-1 py-1 px-3 bg-[#54755A] text-white rounded-2xl hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center min-w-[80px] max-w-[112px]"
                        >
                          sign in
                        </NavLink>
                      </li>
                    )}
                    {isAuth ? (
                      <button
                        className={
                          "block my-1 py-1 px-3 bg-[#54755A] text-white rounded-2xl hover:bg-white hover:text-black md:hover:bg-white md: md:p-2"
                        }
                        onClick={() => logout()}
                      >
                        logout
                      </button>
                    ) : (
                      <li>
                        <NavLink
                          to="signup"
                          className="block my-1 py-1 px-3 bg-[#54755A] text-white rounded-2xl md:border-0 hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center min-w-[80px] max-w-[112px]"
                        >
                          sign up
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              }
            </div>
          </nav>
        </div>
        <Outlet></Outlet>
        <footer className="bg-[#0E3021] border-gray-200 w-full text-white flex justify-center">
          footer
        </footer>
        <Toaster position={"top-center"}></Toaster>
      </div>
    </div>
  );
}

export default MainLayout;
