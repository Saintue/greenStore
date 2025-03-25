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
  const isShopCalculatorActive = useActiveRoute('/greenStore');

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
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
              <Link
                to="/greenStore/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="text-[28px] text-white bg-[#54755A] ml-8 px-2 py-2 rounded-2xl whitespace-nowrap font-balsamiq">
                  GreenStore
                </span>
              </Link>
              <button
                onClick={() => toggleNav()}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-[20px] md:hidden hover:bg-gray-100 focus:outline-none"
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
                  <ul className="text-[20px] font-semibold flex flex-col bg-[#0E3021] px-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 items-center">
                    <li>
                      <Link
                        to="/greenStore/"
                        className={`block my-1 py-1 w-40 md:w-full md:h-[58px] text-white rounded-[20px] bg-[#54755A] hover:bg-white hover:text-black md:hover:bg-white md:p-2 md:px-4 text-center ${isShopCalculatorActive?"active":""} `}
                      >
                        <div className="flex h-full w-full items-center justify-center">
                        Home
                        </div>
                      </Link>
                    </li>
                    <li>
                      <NavLink
                          to="cart"
                          className="block my-1 py-1 w-40 md:w-full md:h-[58px] text-white rounded-[20px] bg-[#54755A] md:border-0 hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center md:px-4"
                      >
                        <div className="flex h-full items-center justify-center">
                          Cart
                        </div>
                      </NavLink>
                    </li>
                    {isAuth ? (
                      <></>
                    ) : (
                      <li>
                        <NavLink
                            to="signin"
                            className="block my-1 py-1 w-40 md:w-full md:h-[58px] bg-[#54755A] text-white rounded-[20px] hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center md:px-4"
                        >
                          <div className="flex h-full items-center justify-center">
                            Sign in
                          </div>
                        </NavLink>
                      </li>
                      )}
                    {isAuth ? (
                      <button
                        className={
                          "block my-1 py-1 px-3 bg-[#54755A] w-40 md:w-full md:h-[58px] text-white rounded-[20px] hover:bg-white hover:text-black md:hover:bg-white md:p-2"
                        }
                        onClick={() => logout()}
                      >
                        logout
                      </button>
                    ) : (
                      <li>
                        <NavLink
                            to="signup"
                            className="block my-1 py-1 px-3 bg-[#54755A] w-40 md:w-full md:h-[58px] text-white rounded-[20px] md:border-0 hover:bg-white hover:text-black md:hover:bg-white md:p-2 text-center md:px-4"
                        >
                          <div className="flex h-full items-center justify-center">
                            Sign up
                          </div>
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
