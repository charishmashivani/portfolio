var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

emailjs.init("xCnTgFhbEPX3a3Qbq");

function sendEmail(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if(!name || !email || !subject || !message){
        alert("Please fill in all the fields!!!");
        return;
    }

    emailjs.send("service_yfzd39p", "template_adblkgq",{
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    })
    .then(function(response){
        alert("Your message was sent successfully!!!");
        document.getElementById("contact-form").reset();
    },function(error){
        alert("Oops! Something went wrong")
    });
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);