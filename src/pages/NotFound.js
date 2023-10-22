import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import teddyPic from "../assets/images/404/bro.svg"
// import LoadinAnimation from "../components/LoadingAnimation"

function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <div class="mx-5 mb-10 mt-3 flex w-fit flex-col items-center justify-center rounded-lg bg-blue-100 px-16 md:mx-auto md:mb-10 md:mt-3 md:h-[672px]">
          <img
            src={teddyPic}
            alt="404 pic"
            class="mb-9 w-[314px] select-none sm:w-[414px]"
            draggable="false"
          />
          <div class="flex flex-col items-center gap-y-4">
            <span class="text-center text-[20px] font-bold sm:text-[40px]">
              This page could not be found
            </span>
            <span class="text-justify text-xs sm:text-lg">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </span>
            <Link
              to="/"
              class="mb-16 select-none rounded-lg bg-blue-600 px-6 py-2 text-white"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      {/* <LoadinAnimation /> */}
    </>
  )
}

export default NotFound
