function sendMail(contactForm) {
    emailjs.send("yahoo", "ashur_kanwal", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Message sent");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message failed press ok to see error");
        }
    );
    return false;  // To block from loading a new page
}