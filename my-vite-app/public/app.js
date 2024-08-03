const contactForm = document.querySelector(".contact-form");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");

    document.addEventListener("DOMContentLoaded", () => {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        let formData = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
       // console.log(formData);
        if (name.value === "" || email.value === "" || message.value === "") {
            alert("Please fill in all fields");
        }
       await fetch("http://localhost:5000/sendmail", {
            method: "POST",
            headers: { "Content-Type": "application/json/x-www-urlencoded" },
            body: JSON.stringify(formData), 
            
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === "success") {
                    alert("Message Sent");
                    name.value = "";
                    email.value = "";
                    message.value = "";
                } else if (data.status === "fail") {
                    alert("Message failed to send");
                }
            })
            .catch((error) => {
                console.log("An error occurred. Please try again later.", error);
            });
    });
});
