// Include the EmailJS SDK in your HTML file before this script
emailjs.init("JvAgK38r9lpHW4kE6"); // Replace YOUR_PUBLIC_KEY with your actual public key

function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("inquiry-message").value;

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    emailjs.send("service_tbrrhbl", "template_2s5bmjy", templateParams)
        .then(
            function(response) {
                console.log("Email sent successfully:", response);
                document.getElementById("confirmation-message").style.display = "block";
                document.getElementById("inquiry-form").reset();
            },
            function(error) {
                console.error("Failed to send email. Error:", error);
                alert("Failed to send email. Please try again later. Error: " + error.text);
            }
        );
}
