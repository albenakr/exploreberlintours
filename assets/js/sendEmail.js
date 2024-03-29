function sendMail(contactForm) {
    emailjs.send("gmail", "explore_berlin_tours", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "tour_request": contactForm.tourrequest.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                document.querySelector('.btn-contact').innerHTML = "Thanks for reaching out!";
            },
            function(error) {
                console.log("FAILED", error);
                document.querySelector('.btn-contact').innerHTML = "Error, please try again.";
            });
    return false;
}


//