import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import resetpass from "../assets/images/resetpass.svg"
function ReesetPassword() {
  return (
    <>
      <NavBar />

      <main>
        <section className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 md:mb-10 md:mt-3 md:h-[672px] md:flex-row md:items-center">
          <div className="relative">
            <img
              src={resetpass}
              alt="reset pass"
              className="mt-20 w-full sm:w-[645px] sm:rounded-l-lg"
              draggable="false"
            />
            <span className="absolute left-0 top-5 text-center text-xl text-slate-600 sm:left-8 sm:top-12 sm:w-[400px] sm:text-start">
              Don’t worry , We are here help you to recover your Password.
            </span>
          </div>

          <div className="mb-10 flex flex-col items-start rounded-lg bg-blue-100 px-10 sm:mt-0 sm:bg-none md:justify-center lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <form action="" className="flex flex-col gap-y-4">
              <h1 className="text-3xl font-black sm:text-5xl">
                Reset Password
              </h1>
              <span className="sm:w-[317px]">
                Enter the email addresses or mobile number associated with your
                account :
              </span>
              <input
                type="text"
                id="emailmobilenumber"
                name="emailmobilenumber"
                className="w-full rounded-lg border-2 border-gray-400 px-4 py-2 outline-none focus:bg-slate-200 sm:w-[310px]"
                placeholder="Enter your Email or Mobile Number"
              />

              <input
                type="submit"
                value="CONTINUE"
                className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-600 px-2 text-white sm:w-[301px]"
              />
            </form>
            <div className="mt-4">
              <span>
                Return to
                <Link to="/signIn" className="text-blue-500">
                  Sign In
                </Link>
                <Link to="/newPassword">
                  <br />.
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

export default ReesetPassword
