import staryes from "../assets/icons/home/star.svg"
import starNot from "../assets/icons/home/star-not.svg"

function Comment({ star, cText, cTime }) {
  // تعداد ستاره‌ها
  const starCount = Math.min(5, Math.max(0, star))
  // تعداد تصاویر starNot
  const starNotCount = 5 - starCount
  return (
    <div className="flex h-[214px] w-fit shrink-0 snap-center flex-col items-center justify-between gap-y-2 rounded-lg border-2 border-slate-300 p-4">
      <span className="flex gap-x-1">
        {/* نمایش تصاویر ستاره */}
        {Array.from({ length: starCount }, function (_, index) {
          return (
            <img
              key={index}
              src={staryes}
              alt="star"
              draggable="false"
              class="h-[27px] w-[20px]"
            />
          )
        })}

        {/* نمایش تصاویر starNot */}
        {Array.from({ length: starNotCount }, function (_, index) {
          return (
            <img
              key={index}
              src={starNot}
              alt="StarNot"
              draggable="false"
              class="h-[27px] w-[20px]"
            />
          )
        })}
      </span>
      <q className="w-[200px] text-justify text-xs">{cText}</q>
      <span className="text-center text-xs font-black text-slate-400">
        {cTime}
      </span>
    </div>
  )
}

export default Comment
