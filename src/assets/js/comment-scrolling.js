const scrollContainer = document.getElementById("sc")
let scrollPosition = 0
let scrollSpeed = window.innerWidth < 768 ? 1.5 : 0.5
let isAutoScrolling = true

function scrollImages() {
  scrollPosition += scrollSpeed
  scrollContainer.scrollTo(scrollPosition, 0)

  if (
    scrollPosition >=
    scrollContainer.scrollWidth - scrollContainer.clientWidth
  ) {
    scrollPosition = 0
  }

  requestAnimationFrame(scrollImages)
}

function toggleAutoScroll() {
  isAutoScrolling = !isAutoScrolling
  if (isAutoScrolling) {
    scrollImagesIfNeeded()
  }
}

function scrollImagesIfNeeded() {
  if (isAutoScrolling) {
    scrollPosition += scrollSpeed
    scrollContainer.scrollTo(scrollPosition, 0)

    if (
      scrollPosition >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth
    ) {
      scrollPosition = 0
    }

    requestAnimationFrame(scrollImagesIfNeeded)
  }
}

document.addEventListener("scroll", () => {
  if (!isAutoScrolling) {
    toggleAutoScroll()
  }
})

scrollImagesIfNeeded()
