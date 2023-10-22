import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import signup from "../assets/images/signup.svg"
function SignUp() {
  return (
    <>
      <NavBar />

      <main>
        <div className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 md:mb-10 md:mt-3 md:h-[672px] md:flex-row md:items-center">
          <div className="relative">
            <img
              src={signup}
              alt="sign up"
              className="mt-16 w-full sm:w-[645px] sm:rounded-l-lg"
              draggable="false"
            />
            <span className="absolute left-0 top-5 text-center text-xl text-slate-600 sm:left-12 sm:top-12 sm:w-[138px] sm:text-start md:w-[197px]">
              Welcome, Looks like you’re new here!
            </span>
          </div>

          <div className="mb-10 flex flex-col items-start rounded-lg bg-blue-100 px-10 sm:mt-0 sm:bg-none lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <form action="" className="flex flex-col items-start gap-y-4">
              <h1 className="text-3xl font-black sm:text-5xl">Sign Up</h1>
              <span className="flex w-full flex-col">
                <label for="email" className="text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-500 shadow-md focus:border-gray-400 focus:bg-white focus:placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your name"
                />
              </span>
              <span className="flex w-full flex-col">
                <label for="tel" className="text-gray-600">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-500 shadow-md focus:border-gray-400 focus:bg-white focus:placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your Mobile Number"
                />
              </span>
              <span className="flex w-full flex-col">
                <label for="email" className="text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-500 shadow-md focus:border-gray-400 focus:bg-white focus:placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your Email"
                />
              </span>
              <span className="flex w-full flex-col" x-data="{ show: true }">
                <label for="password" className="text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    placeholder="Enter your Password"
                    type="show ? 'password' : 'text'"
                    className="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-500 shadow-md focus:border-gray-400 focus:bg-white focus:placeholder-gray-400 focus:outline-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                    <svg
                      className="h-6 cursor-pointer text-gray-500 hover:text-gray-700"
                      fill="none"
                      click="show = !show"
                      className="{'hidden': !show, 'block':show }"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>

                    <svg
                      className="h-6 cursor-pointer text-gray-500 hover:text-gray-700"
                      fill="none"
                      click="show = !show"
                      className="{'block': !show, 'hidden':show }"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
              <span className="flex w-full flex-col" x-data="{ show: true }">
                <label for="password" className="text-gray-600">
                  Re Enter Password
                </label>
                <div className="relative">
                  <input
                    placeholder="Re Enter Password"
                    type="show ? 'password' : 'text'"
                    className="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-500 shadow-md focus:border-gray-400 focus:bg-white focus:placeholder-gray-400 focus:outline-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                    <svg
                      className="h-6 cursor-pointer text-gray-500 hover:text-gray-700"
                      fill="none"
                      click="show = !show"
                      className="{'hidden': !show, 'block':show }"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>

                    <svg
                      className="h-6 cursor-pointer text-gray-500 hover:text-gray-700"
                      fill="none"
                      click="show = !show"
                      className="{'block': !show, 'hidden':show }"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
              <div>
                <span>
                  <input
                    type="checkbox"
                    id="Remember"
                    name="Remember"
                    value="Remember Me"
                    className="cursor-pointer"
                  />
                  <label
                    for="Remember"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Remember Me
                  </label>
                  <br />
                </span>
                <input
                  type="submit"
                  value="Sign Up"
                  className="mt-3 h-8 w-[200px] cursor-pointer rounded-lg bg-blue-500 px-2 text-white hover:bg-blue-700 sm:w-[301px]"
                />
              </div>
            </form>
            <span className="mt-4">
              Already have an account?
              <Link
                to="/signIn"
                className="border-b-2 border-transparent text-blue-500 hover:border-gray-400"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignUp
