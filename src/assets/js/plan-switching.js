// const slider = document.querySelector(".slider")
// const plans = document.querySelectorAll(".plan")
// const imgBtns = document.querySelectorAll('i[id^="btn-"]') // انتخاب تمام تگ‌های img با آیدی‌های شروع شونده با "btn-"

// let currentIndex = 0

// function toggleActiveClass() {
//   plans[currentIndex].classList.remove("active-plan")
//   plans[currentIndex].classList.add("hidden")

//   currentIndex = (currentIndex + 1) % plans.length

//   plans[currentIndex].classList.add("active-plan")
//   plans[currentIndex].classList.remove("hidden")

//   // افزودن کلاس "btn-active" به تگ‌های img با آیدی‌های "btn-10" و "btn-11" و "btn-12" به ترتیب
//   imgBtns.forEach((imgBtn, index) => {
//     if (index === currentIndex) {
//       imgBtn.classList.add("btn-active")
//     } else {
//       imgBtn.classList.remove("btn-active")
//     }
//   })
// }

// setInterval(toggleActiveClass, 5000)

// const slider = document.querySelector(".slider")
// const plans = document.querySelectorAll(".plan")
// const btns = document.querySelectorAll('i[id^="btn-"]')

// let currentIndex = 0

// function changeSlide(index) {
//   plans[currentIndex].classList.remove("active-plan")
//   plans[currentIndex].classList.add("hidden")

//   currentIndex = index

//   plans[currentIndex].classList.add("active-plan")
//   plans[currentIndex].classList.remove("hidden")

//   btns.forEach((btn, btnIndex) => {
//     if (btnIndex === currentIndex) {
//       btn.classList.add("btn-active")
//     } else {
//       btn.classList.remove("btn-active")
//     }
//   })
// }

// btns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     changeSlide(index)
//   })
// })

// function toggleActiveClass() {
//   changeSlide((currentIndex + 1) % plans.length)
// }

// setInterval(toggleActiveClass, 5000)

// // تابع برای بررسی عرض صفحه و اجرای کد در صورت عرض کوچکتر از 640 پیکسل
// function checkScreenWidth() {
//   if (window.innerWidth < 640) {
//     // اجرای کد در صفحات با عرض کوچکتر از 640 پیکسل
//     toggleActiveClass() // یا هر عمل دیگری که می‌خواهید در صفحات کوچکتر انجام دهید
//   }
// }

// // اجرای تابع برای ابتدا
// checkScreenWidth()

// // اضافه کردن یک رویداد resize برای بررسی تغییر اندازه پنجره مرورگر
// window.addEventListener("resize", checkScreenWidth)

const slider = document.querySelector(".slider")
const plans = document.querySelectorAll(".plan")
const btns = document.querySelectorAll('i[id^="btn-"]')

let currentIndex = 0 // تغییر مقدار اولیه به 0

function changeSlide(index) {
  plans[currentIndex].classList.remove("active-plan")
  plans[currentIndex].classList.add("hidden")

  currentIndex = index

  plans[currentIndex].classList.add("active-plan")
  plans[currentIndex].classList.remove("hidden")

  btns.forEach((btn, btnIndex) => {
    if (btnIndex === currentIndex) {
      btn.classList.add("btn-active")
    } else {
      btn.classList.remove("btn-active")
    }
  })
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    changeSlide(index)
  })
})

function toggleActiveClass() {
  changeSlide((currentIndex + 1) % plans.length)
}

setInterval(toggleActiveClass, 3000)

// تابع برای بررسی عرض صفحه و اجرای کد در صورت عرض کوچکتر از 640 پیکسل
function checkScreenWidth() {
  if (window.innerWidth < 640) {
    // اجرای کد در صفحات با عرض کوچکتر از 640 پیکسل
    currentIndex = 0 // تنظیم مقدار اولیه به 0 (شروع از اسلاید Basic)
    changeSlide(currentIndex)
  }
}

// اجرای تابع برای ابتدا
checkScreenWidth()

// اضافه کردن یک رویداد resize برای بررسی تغییر اندازه پنجره مرورگر
window.addEventListener("resize", checkScreenWidth)
