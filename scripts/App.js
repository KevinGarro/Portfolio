import { Home } from "./Home.js";
import { About } from "./About.js";
import { Skills } from "./Skills.js";
import { Contact } from "./Contact.js";

const home = new Home();
const about = new About();
const skills = new Skills();
const contact = new Contact();

emailjs.init("XE0gaTkYG2ptOTetu");


document.addEventListener("DOMContentLoaded",()=>{
    home.render();
});

const btnHome = document.getElementById("header-list-home");
const btnAbout = document.getElementById("header-list-about");
const btnSkills = document.getElementById("header-list-skills");
const btnContact = document.getElementById("header-list-contact");

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

btnContact.addEventListener("click",()=>{
    contact.render();
});