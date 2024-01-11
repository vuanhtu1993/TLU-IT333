// 
const searchBtn = document.querySelector("#search-btn")
const searchModal = document.querySelector("#search-modal")
const searchInput = document.querySelector("#search-input")
let articles = document.querySelector("#articles")

searchBtn.addEventListener('click', function () {
    searchModal.classList.add("show")
})

searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        filter(e.target.value)
    }
})

const articles_arr = [
    "Localisation and Translation on the Web",
    "Comparing Node JavaScript to JavaScript in the Browser",
    "Responsible JavaScript",
    "Beginner JavaScript Notes",
    "JavaScript Operator Lookup"
]



function render(arr, search = "") {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += `<h3 class="fs-5">${arr[i]}</h3>`
    }
    articles.innerHTML = str
}

render(articles_arr)

function filter(str) {
    const newArray = articles_arr.filter(function (item) {
        return item.toLowerCase().includes(str.toLowerCase())
    })
    render(newArray, str)
}