const backButton = document.querySelector("#back")
const nextButton = document.querySelector("#next")
const images = document.querySelectorAll(".imgCarousel")

const maxImg = images.length

let imgIndex = 0

function next() {

    images[imgIndex].classList.remove("selection")

    imgIndex++

    if(imgIndex >= maxImg)

    imgIndex = 0

    images[imgIndex].classList.add("selection")

}

nextButton.addEventListener("click", next)

function back() {

    images[imgIndex].classList.remove("selection")

    imgIndex--

    if(imgIndex < 0)

    imgIndex += maxImg

    images[imgIndex].classList.add("selection")

}

backButton.addEventListener("click", back)