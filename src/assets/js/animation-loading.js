window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen")
  loadingScreen.style.display = "none"
  document.body.style.overflow = "auto" // بازگشت به اسکرول صفحه
})

// with delay
// window.addEventListener("load", function () {
//   var loadingScreen = document.getElementById("loading-screen")
//   setTimeout(function () {
//     loadingScreen.style.opacity = "0"
//     setTimeout(function () {
//       loadingScreen.style.display = "none"
//       body.style.overflow = "auto" // بازگشت به اسکرول صفحه
//     }, 1000) // تغییرات انیمیشن لودینگ به مدت 1 ثانیه ادامه دارد
//   }, 1000) // تاخیر 1 ثانیه برای نمایش انیمیشن لودینگ
// })
