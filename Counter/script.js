const imgMinor = document.querySelector(".imgMinor")
const imgPlus = document.querySelector(".imgPlus")
const addNumber = document.querySelector("h2")
let plusNumber = 0

imgMinor.addEventListener("click", function () {

    if(plusNumber === 0) {
        addNumber.innerHTML = 0

    } else {

        addNumber.innerHTML = --plusNumber
    }

})

imgPlus.addEventListener("click", function () {

    addNumber.innerHTML = ++plusNumber

})