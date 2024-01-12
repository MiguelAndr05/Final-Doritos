// Add an event listener to the "emailForm" element when it is submitted
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the name, email, and message input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Log the values to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Display an alert to indicate that the email was sent successfully
    alert("Email sent successfully!");
});