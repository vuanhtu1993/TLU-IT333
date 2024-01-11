// DOM
const slides = document.querySelectorAll(".slide")

// Array
let i = 0
let interval;

function next() {
    slides[i].classList.remove("show")
    i++
    i %= slides.length
    slides[i].classList.add("show")
}
