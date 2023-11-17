import { Link, NavLink } from "react-router-dom"

import icon from "../assets/icons/icon.svg"
import user from "../assets/icons/nav/user.svg"
import downArrow from "../assets/icons/nav/down-arrow.svg"

function NavBar() {
  
  return (
    <header className="sticky top-0 z-50">
      <nav className="relative flex select-none items-center justify-between gap-x-2 bg-white/90 px-4 py-4">
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3 text-blue-600">
            <svg
              className="block h-6 w-6 fill-current text-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <Link
          className="flex items-center gap-1 text-xl font-bold leading-none sm:text-3xl"
          to="/"
        >
          <img
            src={icon}
            alt="icon"
            className="h-8 w-8 sm:h-12 sm:w-12"
            draggable="false"
          />
          <span className="text-primary">Speak Up</span>
        </Link>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          <li>
            <NavLink className="text-sm hover:text-slate-400" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-sm hover:text-slate-400" to="/courses">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink className="text-sm hover:text-slate-400" to="/contactus">
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink className="text-sm hover:text-slate-400" to="/aboutus">
              About us
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center md:gap-x-5">
          <Link
            className="rounded-xl py-2 text-sm font-bold text-gray-900 transition duration-200 hover:bg-slate-200 lg:ml-auto lg:mr-3"
            to="/signIn"
          >
            <img src={user} alt="user" draggable="false" />
          </Link>
          <Link
            className="flex rounded-xl px-4 py-2 text-sm font-bold transition duration-200 hover:bg-slate-200"
            to="/"
          >
            EN
            <img src={downArrow} alt="down-arrow" draggable="false" />
          </Link>
        </div>
      </nav>
      <div className="navbar-menu relative z-50 hidden select-none">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
          <div className="mb-8 flex items-center">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              <img src="./dist/icons/icon.svg" draggable="false" alt="icon" />
            </Link>
            <button className="navbar-close">
              <svg
                className="cu rsor-pointer h-6 w-6 text-gray-400 hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  to="/contactus"
                >
                  Contact us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  to="/aboutus"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="flex rounded-xl px-4 py-2 text-sm font-bold text-gray-400 transition duration-200 hover:text-blue-600"
            to="/"
          >
            EN
            <img src={downArrow} alt="down-arrow" draggable="false" />
          </Link>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="mb-3 block rounded-xl border-2 border-primary bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-loose hover:bg-gray-100"
                to="/signIn"
              >
                Sign in
              </Link>
              <Link
                className="mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-blue-700"
                to="/signUp"
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-center text-xs text-gray-400">
              <span>Copyright © 2023 SpeakUp</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
