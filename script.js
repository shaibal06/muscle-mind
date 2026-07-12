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
    let age = document.getElementById("age").value;
    let plan = document.getElementById("plan").value;

    // Empty field validation
    if (name == "" || phone == "" || email == "" || age == "" || plan == "") {
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

    // Data object
    const data = {
        name: name,
        phone: phone,
        email: email,
        age: age,
        plan: plan
    };

    // Loading Popup
    const loadingPopup = document.getElementById("loadingPopup");
    const successPopup = document.getElementById("successPopup");
    const successMessage = document.getElementById("successMessage");

    if (loadingPopup) {
        loadingPopup.style.display = "flex";
    }

    // Send Data to Google Sheet
    fetch("https://script.google.com/macros/s/AKfycbzv0a4CYlVHsi-mRXhalAmIJ-vy3cZiQqmIqBIKBG4Hh-HGcFd6srAclxwDSylGRwNW/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    // Show Success Popup
    setTimeout(function () {

        if (loadingPopup) {
            loadingPopup.style.display = "none";
        }

        if (successMessage) {
            successMessage.innerHTML =
                "Welcome to Muscle Mind Gym, " + name + "!";
        }

        if (successPopup) {
            successPopup.style.display = "flex";
        }

    }, 1500);
}

// Continue Button
function goToThankYou() {
    const target = new URL("./thankyou.html", window.location.href).href;
    window.top.location.replace(target);
}
// Welcome Function
function welcomeMember() {

    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Please enter your name.");
    }
    else {
        alert("Welcome to Muscle Mind Gym, " + name + "!");
    }
}