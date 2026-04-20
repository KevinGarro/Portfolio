import { Home } from "./Home.js";
import { About } from "./About.js";

const home = new Home();
const about = new About();

document.addEventListener("DOMContentLoaded",()=>{
    home.render();
});

const btnHome = document.getElementById("header-list-home");
const btnAbout = document.getElementById("header-list-about");

btnHome.addEventListener("click", ()=>{
    home.render();
});

btnHome.addEventListener("click", ()=>{
    home.render();
});

btnAbout.addEventListener("click",()=>{
    about.render();
});