const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent =
        "Thank you for visiting my portfolio! Let's build something amazing.";
});