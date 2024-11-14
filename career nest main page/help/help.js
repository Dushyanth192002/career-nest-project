// Function to display the contact form when "Contact Us" is clicked
function openContactForm() {
    var form = document.getElementById("contact-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
