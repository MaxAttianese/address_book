const btnSwitchColor = document.getElementById("changeStyleMode");

const titleContainer = document.getElementsByClassName("title-container");
const iconContainer = document.getElementsByClassName("icon-container");
const cardContainer = document.getElementsByClassName("card-container");
const personalImg = document.getElementsByClassName("personal-img");
const divLink = document.getElementsByClassName("bg-a-dark");
const bioSection = document.getElementsByClassName("bio-section");

btnSwitchColor.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    cardContainer[0].classList.toggle("card-container-dark");
    personalImg[0].classList.toggle("personal-img-dark");
    titleContainer[0].classList.toggle("title-container-dark");
    iconContainer[0].classList.toggle("icon-container-dark");
    for (let i = 0; i < divLink.length; i++) {
        divLink[i].classList.toggle("bg-address-a-dark");
    }
    bioSection[0].classList.toggle("bio-section-dark");
    btnSwitchColor.classList.toggle("btn-dark");
})