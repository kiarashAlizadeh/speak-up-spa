import { Link } from "react-router-dom"

import book from "../assets/icons/home/book.svg"
import person from "../assets/icons/home/person.svg"
import scorepic from "../assets/icons/home/score.svg"
import arrowRight from "../assets/icons/home/arrow-right.svg"

function Course({ course, courseTitle, lesson, student, level, score }) {
  return (
    <div className="mb-4 flex flex-col rounded-lg border-2 border-slate-300 px-6 py-4">
      <img
        src={course}
        alt="popular course"
        className="mb-2 h-[236px] w-[304px] rounded-lg sm:w-[355px]"
      />
      <span className="mb-4 text-xl font-bold">{courseTitle}</span>
      <div className="mb-5 flex justify-between">
        <span className="flex gap-x-1 text-sm font-normal">
          <img src={book} alt="book" />
          Lesson: {lesson}
        </span>
        <span className="flex gap-x-1 text-sm font-normal">
          <img src={person} alt="person" />
          Student: {student}
        </span>
        <span className="flex gap-x-1 text-sm font-normal">
          <img src={scorepic} alt="score" />
          {level}
        </span>
      </div>
      <div className="flex justify-between hover:opacity-75">
        <Link to="" className="flex rounded-lg bg-primary p-2 text-white">
          Start Course
          <img src={arrowRight} alt="arrow-right" />
        </Link>
        <img src={score} alt="Score" />
      </div>
    </div>
  )
}

export default Course
