let button = document.getElementById("change-theme");

if (sessionStorage.getItem("theme") == "light") {
  document.body.classList.add("light");
} else if (sessionStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

button.addEventListener("click", ()=>{
    if(document.body.classList.contains("light")) {
        document.body.classList.replace("light", "dark");
        sessionStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        sessionStorage.setItem("theme", "light");
    }
})