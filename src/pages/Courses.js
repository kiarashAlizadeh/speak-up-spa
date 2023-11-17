import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Course from "../components/Course"

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
import course7 from "../assets/images/courses/7.png"
import course8 from "../assets/images/courses/8.png"
import course9 from "../assets/images/courses/9.png"
import course10 from "../assets/images/courses/10.png"
import course11 from "../assets/images/courses/11.png"
import course12 from "../assets/images/courses/12.png"

function Courses() {
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
    {
      id: 7,
      course: course7,
      courseTitle: "LinguaLink Learning",
      lesson: 6,
      student: 22,
      level: "Intermediate",
      score: score1,
    },
    {
      id: 8,
      course: course8,
      courseTitle: "WordWise Wizards",
      lesson: 12,
      student: 10,
      level: "Intermediate",
      score: score3,
    },
    {
      id: 9,
      course: course9,
      courseTitle: "TalkTrek Language Lab",
      lesson: 3,
      student: 0,
      level: "Advanced",
      score: score3,
    },
    {
      id: 10,
      course: course10,
      courseTitle: "VerbVision Institute",
      lesson: 37,
      student: 259,
      level: "Intermediate",
      score: score1,
    },
    {
      id: 11,
      course: course11,
      courseTitle: "FluentU Roadmap",
      lesson: 56,
      student: 25,
      level: "Advanced",
      score: score3,
    },
    {
      id: 12,
      course: course12,
      courseTitle: "MultiTalk Mastery",
      lesson: 34,
      student: 352,
      level: "Intermediate",
      score: score1,
    },
  ]

  return (
    <>
      <NavBar />

      <div className="mb-3 ml-5 mt-10 select-none text-2xl font-extrabold text-dark-primary sm:mb-5 sm:text-center sm:text-4xl">
        English Courses
      </div>

      <section className="mb-2 flex select-none flex-wrap justify-center px-2 sm:gap-x-6 sm:gap-y-12">
        {courses.map((course) => (
          <Course {...course} key={course.id} />
        ))}
      </section>

      <div className="mb-20 select-none text-center">
        <button className="h-[40px] w-[300px] rounded-lg border-2 border-primary text-xl font-medium text-primary hover:bg-primary hover:text-white sm:h-[48px] sm:w-[392px]">
          Load More
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Courses
