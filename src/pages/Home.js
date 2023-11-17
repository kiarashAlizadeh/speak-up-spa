import { Link } from "react-router-dom"

import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import rafiki from "../assets/images/home/rafiki.svg"

import learnOnline1 from "../assets/images/home/learn-online/1.jpeg"
import learnOnline2 from "../assets/images/home/learn-online/2.png"
import learnOnline3 from "../assets/images/home/learn-online/3.png"

import arrowRight from "../assets/icons/home/arrow-right-blue.svg"
import Frame from "../assets/images/home/test-language/Frame.svg"
import aboutUs from "../assets/images/home/about-us/image.png"

// scores
import score1 from "../assets/images/home/popular-course/Score1.png"
import score3 from "../assets/images/home/popular-course/Score3.png"

// courses pics
import course1 from "../assets/images/courses/1.png"
import course2 from "../assets/images/courses/2.png"
import course3 from "../assets/images/courses/3.png"
import course4 from "../assets/images/courses/4.png"
import course5 from "../assets/images/courses/5.png"
import course6 from "../assets/images/courses/6.png"
import Course from "../components/Course"
import Comment from "../components/Comment"

import checkBlue from "../assets/icons/home/check-blue.svg"

function Home() {
  let courses = [
    {
      id: 1,
      course: course1,
      courseTitle: "Language Mastery Pro",
      lesson: 6,
      student: 98,
      level: "Advanced",
      score: score3,
    },
    {
      id: 2,
      course: course2,
      courseTitle: "FluentSpeak Academy",
      lesson: 8,
      student: 24,
      level: "Elementary",
      score: score1,
    },
    {
      id: 3,
      course: course3,
      courseTitle: "LinguaLearn Hub",
      lesson: 48,
      student: 200,
      level: "Intermediate",
      score: score1,
    },
    {
      id: 4,
      course: course4,
      courseTitle: "TalkRight Institute",
      lesson: 16,
      student: 31,
      level: "Proficiency",
      score: score1,
    },
    {
      id: 5,
      course: course5,
      courseTitle: "Polyglot Progress",
      lesson: 4,
      student: 29,
      level: "Advanced",
      score: score3,
    },
    {
      id: 6,
      course: course6,
      courseTitle: "VerbalVista School",
      lesson: 52,
      student: 112,
      level: "Intermediate",
      score: score1,
    },
  ]

  let comments = [
    {
      id: 1,
      star: 4,
      cText:
        "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!",
      cTime: "jack watson,  14 days ago",
    },
    {
      id: 2,
      star: 0,
      cText:
        "Ich bin zufällig auf eure Website gestoßen, während ich nach Deutschlernressourcen gesucht habe, und sie hat mein Sprachlernen völlig verändert. Die strukturierten Lektionen und sdie Tests helfen mir, meinen Fortschritt zu messen. Vielen Dank für solch eine wertvolle Ressource!",
      cTime: "Markus Schmidt,  14 days ago",
    },
    {
      id: 3,
      star: 5,
      cText:
        "¡Vuestra plataforma de aprendizaje de inglés es increíble! He estado utilizando vuestros cursos durante un tiempo y he experimentado un progreso notable en mis habilidades lingüísticas.La variedad de lecciones y los ejercicios interactivos hacen que el aprendizaje sea divertido y efectivo. ¡Os doy 5 estrellas!",
      cTime: "María García, 3 days ago",
    },
    {
      id: 4,
      star: 3,
      cText:
        "İngilizce öğrenim platformunuz gerçekten harika! Bir süredir kurslarınızı kullanıyorum ve dil becerilerimde önemli bir ilerleme gördüm. Derslerin çeşitliliği ve etkileşimli egzersizler dil öğrenmeyi eğlenceli ve etkili kılıyor. 5 üzerinden 5 puan!",
      cTime: "Ayşe Demir, 9 days ago",
    },
    {
      id: 5,
      star: 1,
      cText:
        "Your English language learning platform is outstanding! I've been using your courses for a while, and I've seen remarkable progress in my language skills. The variety of lessons and the interactive exercises make learning fun and effective.",
      cTime: "Sarah Johnson, 10 days ago",
    },
    {
      id: 5,
      star: 2,
      cText:
        "Ich bin zufällig auf eure Website gestoßen, während ich nach Deutschlernressourcen gesucht habe, und sie hat mein Sprachlernen völlig verändert. Die strukturierten Lektionen und die Tests helfen mir, meinen Fortschritt zu messen. Vielen Dank für solch eine wertvolle Ressource!",
      cTime: "Markus Schmidt, 14 days ago",
    },
  ]

  return (
    <>
      <NavBar />

      <header>
        <div className="w-full select-none bg-[#0B1E46] py-2 text-center text-[10px] text-yellow-400 lg:text-base">
          Get 50% off SpeakUp Premium & unlock new language superpowers!
        </div>
        <section className="flex w-full flex-col items-center justify-around bg-gradient-to-r from-[#2563EB] to-[#4FB3FF] px-6 py-7 lg:flex-row 2xl:-mb-14">
          <div className="flex flex-col items-center text-white lg:items-start">
            <span className="mb-4 max-w-xl text-center text-2xl font-black lg:text-start lg:text-5xl">
              Studying Online is now much easier
            </span>
            <span className="mb-4 max-w-[510px] text-center lg:text-start">
              Speak Up is an interesting platform that will teach you in more an
              interactive way
            </span>
            <button className="mb-5 w-fit select-none rounded-lg bg-yellow-500 px-4 py-2 lg:mb-0">
              Let’s start
            </button>
          </div>
          <img
            src={rafiki}
            alt=""
            className="select-none lg:h-[536px]"
            draggable="false"
          />
        </section>
      </header>

      <main className="2xl:px-28">
        {/*  learn online  */}
        <section className="mb-10 flex flex-col items-center gap-y-8 p-5 sm:gap-y-20">
          <div className="flex flex-col gap-y-8 2xl:flex-row 2xl:items-start 2xl:justify-around 2xl:gap-x-16">
            {/*  speakup classNamees  */}
            <div className="mt-12 flex flex-col items-center rounded-lg border-2 border-primary/40 px-3 py-4 sm:w-[600px] sm:px-6 sm:py-11">
              <span className="mb-2 w-52 text-center text-lg font-bold text-[#0082F5] sm:w-[515px] sm:text-3xl">
                You can learn online and sit in Your Home
              </span>
              <span className="text-justify text-sm font-semibold sm:text-lg">
                speak Up is a quick and convenient online test to help higher
                education institutions and employers check the English levels of
                individuals and groups of candidates.
              </span>
            </div>

            {/*  pic 1  */}
            <div className="rounded-lg border-4 border-slate-200 p-2 sm:w-[600px] sm:border-transparent">
              <img
                src={learnOnline1}
                alt=""
                className="sm:shadow-pic mb-4 select-none rounded-lg sm:w-[600px] sm:rounded-[55px]"
                draggable="false"
              />
              <span className="flex flex-col gap-y-2">
                <h2 className="text-2xl font-extrabold sm:text-4xl">
                  You Speak Up To 6 Month Faster Than Now
                </h2>
                <span className="text-justify text-base font-normal sm:text-xl">
                  Our range of free teaching resources, lesson plans and
                  activities is designed to help you prepare your students for
                  our exams and tests. We also have a range of teaching
                  qualifications, courses and support to help you as a teacher.
                </span>
                <span className="rounded-xl border-2 border-gray-400 p-2 text-xs font-normal sm:text-lg">
                  <span className="text-lg font-semibold sm:text-xl">
                    Fun fact : <br />
                  </span>
                  Did you know remember %95 of a massage when it’s watched vs
                  only 10% of what you read try it.
                </span>
              </span>
            </div>
          </div>

          {/*  pic 2  */}
          <div className="flex flex-col items-center rounded-lg border-4 border-slate-200 p-2 sm:border-transparent 2xl:flex-row 2xl:gap-x-10">
            <img
              src={learnOnline2}
              alt=""
              className="sm:shadow-pic mb-4 select-none rounded-lg sm:w-[600px] sm:rounded-[55px]"
              draggable="false"
            />
            <span className="flex flex-col gap-y-2 sm:w-[600px]">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                You can learn online and sit in className
              </h2>
              <span className="text-justify text-base font-normal sm:text-xl">
                Speak Up is a quick and convenient online test to help higher
                education institutions and employers check the English levels of
                individuals and groups of candidates. It combines the latest
                with the reliability and quality you expect from Speak Up. Try
                our quick, free online tests to find out what your level of
                English is, and which Cambridge English Qualification might be
                best for you
              </span>
            </span>
          </div>

          {/*  pic 3  */}
          <div className="flex flex-col items-center rounded-lg border-4 border-slate-200 p-2 sm:border-transparent 2xl:flex-row-reverse 2xl:gap-x-10">
            <img
              src={learnOnline3}
              alt=""
              className="sm:shadow-pic mb-4 select-none rounded-lg sm:w-[600px] sm:rounded-[55px]"
              draggable="false"
            />
            <span className="flex flex-col gap-y-2 sm:w-[600px]">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                Together we inspire learners to go further
              </h2>
              <span className="text-justify text-base font-normal sm:text-xl">
                Try our quick, free online tests to find out what your level of
                English is, and which Cambridge English Qualification might be
                best for you. at the end you will get recommendations on how to
                improve your English. Try our quick, free online tests to find
                out what your level of English is, and which Cambridge English
                Qualification might be best for you
              </span>
            </span>
          </div>
        </section>

        {/*  Popular  Course  */}
        <section>
          <div className="mb-3 ml-5 select-none text-2xl font-extrabold text-dark-primary sm:mb-5 sm:text-center sm:text-4xl">
            Popular Course
          </div>
          <div className="mb-4 flex select-none flex-wrap justify-center px-2 sm:gap-x-6 sm:gap-y-12">
            {courses.map((course) => (
              <Course {...course} key={course.id} />
            ))}
          </div>
          <Link
            to="/Courses"
            className="mx-auto mb-10 flex h-8 w-[152px] select-none items-center justify-center rounded-lg border-2 border-primary text-xs font-medium text-primary hover:bg-primary hover:text-white sm:h-[48px] sm:w-[392px] sm:text-xl lg:mb-20"
          >
            See all courses
            <img src={arrowRight} alt="arrow-right" className="w-5 sm:w-auto" />
          </Link>
        </section>

        {/*  test language  */}
        <section className="mx-auto mb-10 flex max-w-[400px] items-center justify-around gap-x-10 sm:my-20 sm:max-w-full sm:justify-center sm:gap-x-32 lg:mx-10 lg:gap-x-40">
          <div className="w-[130px] text-xs text-dark-primary sm:hidden">
            free online tests to find out what your level of English, white
            <Link
              to="/"
              className="font-black text-primary hover:text-primary/70"
            >
              SpeakUp
            </Link>
            <b>. . .</b> <br />
            There are tests suited for every level.
          </div>
          <div className="hidden w-[250px] text-justify text-base font-black text-dark-primary sm:flex sm:flex-col lg:w-[557px] lg:text-lg">
            <span className="text-3xl font-black">Test Your English</span>
            <span>
              Try our quick, free online tests to find out what your level of
              English is, and which
              <Link
                to="/"
                className="font-black text-primary hover:text-primary/70"
              >
                SpeakUp{" "}
              </Link>
              English Qualification might be best for you. There are tests
              suited for every level.
            </span>
          </div>
          <div className="relative">
            <img
              src={Frame}
              alt="Frame"
              className="w-auto sm:w-[250px] lg:w-[402px]"
            />
            <span className="absolute right-5 top-[40%] w-[125px] rounded-lg bg-slate-200 px-1 py-1 text-center sm:right-[27%] sm:w-[230px] sm:py-3 lg:w-[360px] lg:rounded-xl lg:py-6">
              <Link
                to="/"
                className="rounded-lg bg-primary px-2 py-1 text-xs font-black text-white hover:bg-primary/70 sm:text-2xl lg:rounded-xl lg:px-4 lg:py-2 lg:text-4xl"
              >
                Test Your English
              </Link>
            </span>
          </div>
        </section>

        {/*  about us  */}
        <section className="mb-10 flex flex-col md:mx-4 md:mb-20 md:flex-row-reverse md:items-center md:justify-center md:gap-x-5 xl:gap-x-24">
          <div className="mx-auto mb-7 flex flex-col gap-y-2 px-6 md:mx-0">
            <span className="text-2xl font-black lg:text-4xl"> About Us </span>
            <span className="text-2xl font-black lg:text-4xl">
              Online Group Courses
            </span>
            <span className="max-w-[450px] text-justify text-sm md:max-w-[350px] lg:text-base xl:w-[549px]">
              The learning experiences we create could only come from Cambridge.
              Our solutions for teaching and assessment are empowering millions
              of learners everywhere and are built on unique insights from our
              research, expertise and
              <Link to="/" className="font-black text-primary">
                speak Up
              </Link>
              is a quick and convenient online test to help higher education
              institutions and employers and groups of candidates.
            </span>
          </div>
          <img
            src={aboutUs}
            alt="about us"
            className="md:max-w-[350px] lg:max-w-fit"
          />
        </section>

        {/*  comments  */}
        <section className="mx-5 mb-10 flex flex-col items-center sm:items-center">
          <span className="mb-2 text-center text-2xl font-black sm:text-xl lg:text-3xl">
            Here’s what others love about Speak Up
          </span>
          <span className="mb-4 text-xs font-semibold md:text-sm">
            Our strong community are all learning together. Here’s what some of
            them say.....
          </span>
          <div
            className="flex w-full snap-proximity justify-between gap-x-4 overflow-x-hidden xl:w-[1400px]"
            id="sc"
          >
            {comments.map((comment) => (
              <Comment {...comment} key={comment.id} />
            ))}
          </div>
        </section>

        {/* Pricing Plan*/}
        <section className="mb-10 flex flex-col items-center lg:mb-16">
          <span className="mb-1 text-2xl font-black text-[0B0B67] lg:text-4xl">
            Pricing Plan
          </span>
          <span className="mb-4 text-sm font-normal text-[#03032A] lg:text-lg">
            Choose the right pricing for you and get started
          </span>
          <div className="flex select-none flex-wrap items-center justify-center gap-4 lg:mt-3 xl:gap-x-8">
            {/* basic */}
            <div className="plan group hidden w-[256px] flex-col justify-between rounded-lg border-2 border-blue-400 px-2 py-4 text-gray-800 sm:flex lg:relative lg:mt-3 lg:h-[539px] lg:w-[392px] lg:justify-start lg:hover:scale-y-110">
              <span className="mb-1 text-2xl font-black lg:text-4xl">
                Basic
              </span>
              <span className="text-sm font-normal lg:text-lg">
                Limited access
              </span>
              <span className="my-3 bg-slate-200 p-2 align-middle text-lg font-semibold group-hover:bg-blue-500 group-hover:text-slate-200 lg:text-2xl">
                Free
              </span>
              <span className="mb-3 flex flex-col gap-y-2">
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Every first chapter free
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Selection of free courses
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Free professional profile and job
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Upgrade earn certificates
                </span>
              </span>
              <Link
                to="/"
                className="left-auto mx-auto rounded-lg border-2 border-blue-600 px-4 py-2 text-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:w-[336px] lg:text-xl"
              >
                Get Started
              </Link>
            </div>

            {/* premium */}
            <div className="plan group hidden w-[256px] flex-col justify-between rounded-lg border-2 border-blue-400 px-2 py-4 text-gray-800 sm:flex lg:relative lg:mt-3 lg:h-[539px] lg:w-[392px] lg:justify-start lg:hover:scale-y-110">
              <span className="mb-1 text-2xl font-black lg:text-4xl">
                Premium{" "}
              </span>
              <span className="text-sm font-normal lg:text-lg">
                For individuals
              </span>
              <span className="my-3 bg-slate-200 p-2 align-middle text-lg font-semibold group-hover:bg-blue-500 group-hover:text-slate-200 lg:text-2xl">
                $80.99 / month
              </span>
              <span className="mb-3 flex flex-col gap-y-2">
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Access our full content library
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Shareable certificate upon completion
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Access to course materials
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Go from zero to job ready
                </span>
                <span className="hidden gap-x-1 text-sm font-normal lg:flex lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Graded assignments and exams
                </span>
                <span className="hidden gap-x-1 text-sm font-normal lg:flex lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Course support
                </span>
                <span className="hidden gap-x-1 text-sm font-normal lg:flex lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  More ways to learn to code
                </span>
              </span>
              <Link
                to="/"
                className="left-auto mx-auto rounded-lg border-2 border-blue-600 px-4 py-2 text-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:w-[336px] lg:text-xl"
              >
                Get Started
              </Link>
            </div>

            {/*  teams  */}
            <div className="plan group hidden w-[256px] flex-col justify-between rounded-lg border-2 border-blue-400 px-2 py-4 text-gray-800 sm:flex lg:relative lg:mt-3 lg:h-[539px] lg:w-[392px] lg:justify-start lg:hover:scale-y-110">
              <span className="mb-1 text-2xl font-black lg:text-4xl">
                Teams
              </span>
              <span className="text-sm font-normal lg:text-lg">
                For teams of 2 and up
              </span>
              <span className="my-3 bg-slate-200 p-2 align-middle text-lg font-semibold group-hover:bg-blue-500 group-hover:text-slate-200 lg:text-2xl">
                $139 / month
              </span>
              <span className="mb-3 flex flex-col gap-y-2">
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Everything in premium plus
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Access to course materials
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  Manage your group
                </span>
                <span className="flex gap-x-1 text-sm font-normal lg:text-lg">
                  <img
                    src={checkBlue}
                    alt=""
                    className="w-[18px] lg:w-[22px]"
                  />
                  View learning activity and track progress
                </span>
              </span>
              <Link
                to="/"
                className="left-auto mx-auto rounded-lg border-2 border-blue-600 px-4 py-2 text-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:w-[336px] lg:text-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="mt-5 flex gap-x-2 text-blue-300 sm:hidden">
            <i className="fa-solid fa-circle btn-active" id="btn-10"></i>
            <i className="fa-solid fa-circle" id="btn-11"></i>
            <i className="fa-solid fa-circle" id="btn-12"></i>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
