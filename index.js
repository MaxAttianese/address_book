const btn = document.getElementById("changeStyleMode");

const titleContainer = document.getElementsByClassName("title-container");
const iconContainer = document.getElementsByClassName("icon-container");
const tableBorder = document.getElementsByClassName("table-border");
const tBody = document.getElementsByClassName("tbody-light-mode");
const circles = document.getElementsByClassName("circle-id");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    titleContainer[0].classList.toggle("title-container-dark-mode");
    iconContainer[0].classList.toggle("icon-container-dark-mode");
    tableBorder[0].classList.toggle("table-border-dark-mode");
    tBody[0].classList.toggle("tbody-dark-mode");
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.toggle("circle-id-dark-mode");
        
    }
    btn.classList.toggle("btn-dark");
})
