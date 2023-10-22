import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import signin from "../assets/images/signin.svg"
import google from "../assets/icons/google-color.svg"
import facebook from "../assets/icons/facebook-color.svg"
import instagram from "../assets/icons/instagram-color.svg"
function SignIn() {
  return (
    <>
      <NavBar />

      <main>
        <section className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 md:mb-10 md:mt-3 md:h-[672px] md:flex-row-reverse md:items-center">
          <div className="relative">
            <img
              src={signin}
              alt="sign in"
              className="mt-16 w-full sm:w-[645px] sm:rounded-l-lg"
              draggable="false"
            />
            <span className="absolute left-0 top-5 text-center text-xl text-slate-600 sm:left-8 sm:top-12 sm:w-[138px] sm:text-start md:w-[197px]">
              Welcome, We are glad to see you again!
            </span>
          </div>

          <div className="mb-10 flex flex-col items-start px-10 sm:mt-0 sm:bg-none md:justify-center lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <form action="" className="flex flex-col items-start gap-y-4">
              <h1 className="text-3xl font-black sm:text-5xl">Sign In</h1>
              <span className="w-full">
                <label for="emailmobilenumber" className="text-gray-600">
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  id="emailmobilenumber"
                  name="emailmobilenumber"
                  className="input block w-full"
                  placeholder="Enter your Email or Mobile Number"
                />
              </span>
              <span className="w-full" x-data="{ show: true }">
                <label for="password" className="text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    placeholder="Enter your Password"
                    type="show ? 'password' : 'text'"
                    className="input block w-full"
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
                <span className="mb-2 flex justify-between">
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
                  </span>
                  <Link
                    to="/resetPassword"
                    className="border-b-2 border-transparent text-blue-500 hover:border-gray-400"
                  >
                    Forget password?
                  </Link>
                </span>
                <input
                  type="submit"
                  value="Sign In"
                  className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-500 px-2 text-white hover:bg-blue-700 sm:w-[301px]"
                />
              </div>
            </form>
            <div className="mx-auto my-5 flex gap-4">
              <span className="w-16 border-b-2 border-gray-400"></span>
              <span>Or continue with</span>
              <span className="w-16 border-b-2 border-gray-400"></span>
            </div>
            <div className="mx-auto mb-4 flex gap-4">
              <Link to="">
                <img
                  src={google}
                  alt="google"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
              <Link to="">
                <img
                  src={facebook}
                  alt="facebook"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
              <Link to="">
                <img
                  src={instagram}
                  alt="instagram"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
            </div>
            <div>
              <span>
                Don’t have an Account?
                <Link
                  to="/signUp"
                  className="border-b-2 border-transparent text-blue-500 hover:border-gray-400"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default SignIn
