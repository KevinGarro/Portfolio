export class Contact{
    render(){
        const app = document.getElementById("app");
        app.innerHTML = "";


        const divForm = document.createElement("DIV");
        divForm.classList.add("form-container");

        const form = document.createElement("FORM");

        const h2FormContact = document.createElement("H2");
        h2FormContact.classList.add("form-contact-h2")
        h2FormContact.textContent = "Contact me"
        
        const inputName = document.createElement("INPUT");
        inputName.classList.add("form-name");
        inputName.type = "text";
        inputName.placeholder = "Enter your name";
        inputName.required = true;

        const inputEmail = document.createElement("INPUT");
        inputEmail.classList.add("form-email");
        inputEmail.type = "email";
        inputEmail.placeholder = "Enter your email";
        inputEmail.required = true;

        const text = document.createElement("TEXTAREA");
        text.placeholder = "Entner a message"
        text.required = true;

        const submit = document.createElement("INPUT");
        submit.type = "submit";
        submit.classList.add("form-submit");
        submit.value = "Send";

        const divContact = document.createElement("DIV");
        divContact.classList.add("contact-container");

        const h2Contact = document.createElement("H2");
        h2Contact.classList.add("contact-h2")
        h2Contact.textContent = "Contacts"

        const h3Phone = document.createElement("H3");
        h3Phone.classList.add("contact-phone-h3");
        h3Phone.textContent = "Phone";

        const pPhone = document.createElement("P");
        pPhone.classList.add("contact-email-p")
        pPhone.textContent = "72184428"

        const h3Email = document.createElement("H3");
        h3Email.classList.add("contact-email-h3");
        h3Email.textContent = "Email";

        const pEmail = document.createElement("P");
        pEmail.classList.add("contact-email-p");
        pEmail.textContent = "munozgarrokevin@gmail.com";


        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = inputName.value.trim();
            const email = inputEmail.value.trim();
            const message = text.value.trim();

            if (name.length < 3) {
                alert("Name must be at least 3 characters");
                return;
            }

            if (/\d/.test(name)) {
                alert("Name cannot contain numbers");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email");
                return;
            }

            if (message.length < 10) {
                alert("Message must be at least 10 characters");
                return;
            }

            submit.textContent = "Sending...";

            const params = {
                name,
                email,
                message
            };

            emailjs.send(
                "service_r726cxe",
                "template_2g9prio",
                params
            )
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
                submit.textContent = "Send";
            })
            .catch((error) => {
                console.error(error);
                alert("Error sending message");
                submit.textContent = "Send";
            });
        });


        form.append(inputName,inputEmail,text,submit);
        divContact.append(h2Contact,h3Phone,pPhone,h3Email,pEmail);
        divForm.append(h2FormContact,form);
        app.append(divForm,divContact);
    }
}