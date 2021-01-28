function sendMail(contactForm) {
    emailjs.send("yahoo", "ashur_kanwal", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            var element = document.getElementById("sendEmailSuccess");
            element.classList.add("d-block");
        },
        function(error) {
            console.log("FAILED", error);
            var element = document.getElementById("sendEmailFail");
            element.classList.add("d-block");
        }
    );
    return false;  // To block from loading a new page
}