// Age Validation Function
function checkAge() {

    let age = document.getElementById("age").value;

    if (age == "") {
        alert("Please enter your age.");
        return false;
    }
    else if (age >= 18) {
        return true;
    }
    else {
        alert("You must be 18 or older.");
        return false;
    }
}


// Main Form Validation
function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let plan = document.getElementById("plan").value;

    // Check empty fields
    if (name == "" || phone == "" || email == "" || plan == "") {
        alert("Please fill all the fields.");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation
    if (phone.length != 10) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    // Age validation
    if (!checkAge()) {
        return;
    }

    // Success
    alert("Welcome to Muscle Mind Gym, " + name + "!");
    location.href = "thankyou.html";
}


// Optional Welcome Function
function welcomeMember() {

    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Please enter your name.");
    }
    else {
        alert("Welcome " + name + "!");
    }
}