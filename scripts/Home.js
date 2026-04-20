// Class responsible for creating and displaying the Home menu elements
export class Home{
    render(){
        const app = document.getElementById("app");
        app.innerHTML = "";

        const div = document.createElement("DIV");
        div.classList.add("home-container");

        const divInfo = document.createElement("DIV");
        divInfo.classList.add("home-divInfo")

        const image = document.createElement("IMG");
        image.classList.add("home-me");
        image.src = "https://tse1.mm.bing.net/th/id/OIP.ihrHIkr8denlmqKH1H7D8QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";


        const h2 = document.createElement("H2");
        h2.textContent = "Kevin Muñoz Garro.";
        h2.classList.add("home-title");

        const h3 = document.createElement("H3");
        h3.textContent = "Desarrollador Frontend.";
        h3.classList.add("home-subtitle");

        const p = document.createElement("P");
        p.textContent = "Im Kevin Muñoz Garro, a web developer with a background in computer science and a passion for creating functional, well‑structured solutions. I specialize in modern JavaScript and am currently focusing on backend development with Node.js and SQL. I enjoy learning by doing, optimizing code, and applying best practices that connect theory with real‑world development. I’m looking for opportunities to keep growing professionally and contribute to projects where efficiency and code clarity are top priorities."
        p.classList.add("home-about-me");

        divInfo.append(h2, h3, p);
        div.append(image,divInfo);
        
        app.appendChild(div);
    }
}