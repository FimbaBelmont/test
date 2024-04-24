import { mainPage } from "./mainpage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./about";
import "./stylesheet.css"
const docContainer = document.querySelector("#content")
const menuBtt = document.querySelector("#Menu");
const homeBtt = document.querySelector("#Home");
const aboutBtt = document.querySelector("#About");


mainPage();

homeBtt.addEventListener("click", () => {
    docContainer.innerHTML = "";
    mainPage();
})

menuBtt.addEventListener("click", () => {
    docContainer.innerHTML = "";
    menuPage();
});

aboutBtt.addEventListener("click", ()=> {
    docContainer.innerHTML = "";
    aboutPage();
})

// ADD STYLELOADER TO WEBPACK AND CONFIGURE THE STYLESHEET
// WRITE UP THE PAGES
