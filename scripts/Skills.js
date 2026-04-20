export class Skills {
    render() {
        const app = document.getElementById("app");
        app.innerHTML = "";

        const div = document.createElement("div");
        div.classList.add("skills-container");

        const divTec = document.createElement("div");
        divTec.classList.add("skills-tec-container");

        const h2Tec = document.createElement("h2");
        h2Tec.classList.add("skills-tec-h2");
        h2Tec.textContent = "Technologies";

        const techs = [
            { name: "Visual Studio Code", img: "images/visual-studio-code-logo.png" },
            { name: "HTML", img: "images/logo-html-5-768.png" },
            { name: "CSS", img: "images/css3-logo-png-transparent.png" },
            { name: "GitHub", img: "images/github-logo-png_seeklogo-304612.png" },
            { name: "JavaScript", img: "images/javascript-logo-javascript-icon-transparent-free-png.webp" }
        ];

        const techGrid = document.createElement("div");
        techGrid.classList.add("skills-tec-grid");

        techs.forEach(tech => {
            const card = document.createElement("div");
            card.classList.add("skill-card");

            const h3 = document.createElement("h3");
            h3.textContent = tech.name;

            const img = document.createElement("img");
            img.src = tech.img;
            img.alt = tech.name;
            img.classList.add("skill-img");

            card.append(h3, img);
            techGrid.appendChild(card);
        });

        divTec.append(h2Tec, techGrid);

        const divSoft = document.createElement("div");
        divSoft.classList.add("skills-soft-container");

        const h2Soft = document.createElement("h2");
        h2Soft.classList.add("skills-soft-h2");
        h2Soft.textContent = "Soft Skills";

        const softSkills = [
            "Critical Thinking",
            "Communication",
            "Teamwork",
            "Problem Solving",
            "Self-learning",
            "Adaptability"
        ];

        const softList = document.createElement("ul");
        softList.classList.add("skills-soft-list");

        softSkills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            softList.appendChild(li);
        });

        divSoft.append(h2Soft, softList);

        div.append(divTec, divSoft);
        app.appendChild(div);
    }
}