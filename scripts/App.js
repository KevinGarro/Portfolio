import { Home } from "./Home.js";

const home = new Home();

document.addEventListener("DOMContentLoaded",()=>{
    home.render();
});

const btnHome = document.getElementById("header-list-home");

btnHome.addEventListener("click", ()=>{
    home.render();
});
