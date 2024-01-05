const btnSwitchColor = document.getElementById("changeStyleMode");
const btnSwitchView = document.getElementById("changeViewMode");


const titleContainer = document.getElementsByClassName("title-container");
const iconContainer = document.getElementsByClassName("icon-container");
const tableBorder = document.getElementsByClassName("table-border");
const tBody = document.getElementsByClassName("tbody-light-mode");
const circles = document.getElementsByClassName("circle-id");
const cardsPeople = document.getElementsByClassName("card-people");
const linkContainer = document.getElementsByClassName("link-container");


btnSwitchColor.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    titleContainer[0].classList.toggle("title-container-dark-mode");
    iconContainer[0].classList.toggle("icon-container-dark-mode");
    tableBorder[0].classList.toggle("table-border-dark-mode");
    tBody[0].classList.toggle("tbody-dark-mode");
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.toggle("circle-id-dark-mode");
        
    }
    for (let i = 0; i < cardsPeople.length; i++) {
        cardsPeople[i].classList.toggle("card-people-dark");
        
    }
    for (let i = 0; i < linkContainer.length; i++) {
        linkContainer[i].classList.toggle("link-container-dark");
        
    }
    btnSwitchColor.classList.toggle("btn-dark");
    btnSwitchView.classList.toggle("btn-dark");
})

