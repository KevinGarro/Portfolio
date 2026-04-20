import { Home } from "./Home.js";
import { About } from "./About.js";
import { Skills } from "./Skills.js";

const home = new Home();
const about = new About();
const skills = new Skills();


document.addEventListener("DOMContentLoaded",()=>{
    home.render();
});

const btnHome = document.getElementById("header-list-home");
const btnAbout = document.getElementById("header-list-about");
const btnSkills = document.getElementById("header-list-skills");

btnHome.addEventListener("click", ()=>{
    home.render();
});

btnHome.addEventListener("click", ()=>{
    home.render();
});

btnAbout.addEventListener("click",()=>{
    about.render();
});

btnSkills.addEventListener("click",()=>{
    skills.render();
});