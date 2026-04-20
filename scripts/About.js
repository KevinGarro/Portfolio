// Class responsible for creating and displaying the "About me" menu elements
export class About{
    render(){
        const app = document.getElementById("app");
        app.innerHTML = "";
        const div = document.createElement("DIV");
        div.classList.add("about-container");

        const h2 = document.createElement("H2");
        h2.textContent = "About me";
        h2.classList.add("about-me-title");
        const pMe = document.createElement("P");
        pMe.classList.add("about-me-p");
        pMe.innerHTML = "My name is Kevin Muñoz Garro, and I live in La Suiza, a town in the Turrialba region. I am a curious individual with a strong interest in continuous learning and the practical application of knowledge. I enjoy exploring different areas and turning what I learn into real solutions, which has helped me develop an analytical and results-oriented mindset.<br><br>I hold a degree in Computer Science from the Universidad Estatal a Distancia (UNED), where I built a solid foundation in data structuring and data management. Throughout my academic journey, I not only strengthened my technical skills but also developed important soft skills, particularly in effective communication, allowing me to adapt easily to different work environments.<br><br>Additionally, I worked on various academic projects that significantly enhanced my understanding of key concepts and their application in real-world scenarios, reinforcing both my technical abilities and my independence when solving problems.";
        const divAboutMe = document.createElement("DIV");
        divAboutMe.classList.add("about-me-container");
 
        const h3Background = document.createElement("H3");
        h3Background.textContent = "Background";
        h3Background.classList.add("about-background-subtitle");
        const pBackground = document.createElement("P");
        pBackground.classList.add("about-background-p");
        pBackground.innerHTML = "My background has been focused on building a strong foundation in the technology field, particularly in data analysis, organization, and management. During my studies at UNED, I worked on different projects that involved everything from logical data structuring to implementing solutions aimed at solving specific needs.<br><br>These experiences allowed me to develop critical thinking, attention to detail, and a deeper understanding of how to approach problems from a technical perspective. I also strengthened skills such as discipline, self-learning, and adaptability when facing new challenges.<br><br>I consider myself a hardworking individual, committed to both personal and professional growth, with a proactive attitude toward continuous improvement.";
        const divAboutBackground = document.createElement("DIV");
        divAboutBackground.classList.add("about-background-container");

        const h3Style = document.createElement("H3");
        h3Style.textContent = "Work Style";
        h3Style.classList.add("about-style-subtitle");
        const pStyle = document.createElement("P");
        pStyle.classList.add("about-style-p");
        pStyle.innerHTML ="I approach my work with a strong sense of responsibility and a constant focus on continuous improvement. I strive to write clear, well-structured, and maintainable code, making sure I understand the logic behind each solution rather than simply making it work.<br><br>I consider myself a self-driven learner, with the initiative to explore new technologies and concepts and apply them in practice. When facing challenges, I rely on critical thinking and persistence, breaking problems down into manageable parts to find efficient solutions.<br><br>I also place great importance on communication and teamwork. I am comfortable sharing ideas, receiving feedback, and collaborating to achieve common goals. At the same time, I am capable of working independently and taking ownership of my responsibilities.<br><br>Overall, I aim to be consistent, detail-oriented, and proactive in everything I do, always maintaining a mindset focused on learning and continuous improvement.";
        const divAboutStyle = document.createElement("DIV");
        divAboutStyle.classList.add("about-style-container");

        const h3Goals = document.createElement("H3");
        h3Goals.textContent = "Goals";
        h3Goals.classList.add("about-goals-subtitle");
        const pGoals = document.createElement("P");
        pGoals.classList.add("about-goals-p");
        pGoals.innerHTML = "My main goal is to join a professional environment where I can grow both individually and as part of a team focused on developing technological solutions, especially in the area of logistics and process optimization.<br><br>I am currently interested in continuing to learn and grow with modern technologies such as Node.js, React, and SQL, understanding that this process requires consistency, discipline, and steady progress.<br><br>In the long term, I aim to become a well-rounded professional in the development field, capable of delivering value through efficient solutions, critical thinking, and a mindset focused on continuous improvement.";
        const divAboutGoals = document.createElement("DIV");
        divAboutGoals.classList.add("about-goals-container");
        

        divAboutMe.append(h2,pMe);
        divAboutBackground.append(h3Background,pBackground);
        divAboutStyle.append(h3Style,pStyle);
        divAboutGoals.append(h3Goals,pGoals);
        div.append(divAboutMe,divAboutBackground,divAboutStyle,divAboutGoals);
        app.appendChild(div);

    }
}