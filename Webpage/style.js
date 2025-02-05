
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    return true;
}

// Add event listener to contact form submit button
document.getElementById("submit").addEventListener("click", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Toggle button functionality
document.getElementById("toggle-button").addEventListener("click", function() {
    var toggleButton = document.getElementById("toggle-button");
    var toggleContent = document.getElementById("toggle-content");

    if (toggleButton.textContent == "Show") {
        toggleButton.textContent = "Hide";
        toggleContent.style.display = "block";
    } else {
        toggleButton.textContent = "Show";
        toggleContent.style.display = "none";
    }
});