const btnSwitchColor = document.getElementById("changeStyleMode");

const titleContainer = document.getElementsByClassName("title-container");
const iconContainer = document.getElementsByClassName("icon-container");
const tableBorder = document.getElementsByClassName("table-border");
const tBody = document.getElementsByClassName("tbody-light");
const circlesId = document.getElementsByClassName("circle-id");
const cardsPeople = document.getElementsByClassName("card-people");
const linkContainer = document.getElementsByClassName("link-container");

btnSwitchColor.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    titleContainer[0].classList.toggle("title-container-dark");
    iconContainer[0].classList.toggle("icon-container-dark");
    tableBorder[0].classList.toggle("table-border-dark");
    tBody[0].classList.toggle("tbody-dark");
    for (let i = 0; i < circlesId.length; i++) {
        circlesId[i].classList.toggle("circle-id-dark"); 
    }
    for (let i = 0; i < cardsPeople.length; i++) {
        cardsPeople[i].classList.toggle("card-people-dark");
    }
    for (let i = 0; i < linkContainer.length; i++) {
        linkContainer[i].classList.toggle("link-container-dark");
    }
    btnSwitchColor.classList.toggle("btn-dark");
})

