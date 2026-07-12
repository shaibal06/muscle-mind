// Google Apps Script URL
const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzv0a4CYlVHsi-mRXhalAmIJ-vy3cZiQqmIqBIKBG4Hh-HGcFd6srAclxwDSylGRwNW/exec";

// Age Validation
function checkAge(age) {
    if (age < 18) {
        alert("You must be 18 or older.");
        return false;
    }
    return true;
}

// Main Form Validation & Submit
async function validateForm() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let plan = document.getElementById("plan").value;

    // Empty Fields
    if (!name || !phone || !email || !age || !plan) {
        alert("Please fill all fields.");
        return;
    }

    // Phone Validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Age Validation
    if (!checkAge(Number(age))) {
        return;
    }

    const loadingPopup = document.getElementById("loadingPopup");
    const successPopup = document.getElementById("successPopup");
    const successMessage = document.getElementById("successMessage");

    const data = {
        name,
        phone,
        email,
        age,
        plan
    };

    try {

        // Show Loading Popup
        if (loadingPopup) {
            loadingPopup.style.display = "flex";
        }

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // Hide Loading
        if (loadingPopup) {
            loadingPopup.style.display = "none";
        }

        // Success Message
        if (successMessage) {
            successMessage.innerHTML =
                "Welcome to Muscle Mind Gym, " + name + "!";
        }

        if (successPopup) {
            successPopup.style.display = "flex";
        }

    } catch (error) {

        if (loadingPopup) {
            loadingPopup.style.display = "none";
        }

        console.error(error);
        alert("Failed to submit form. Please try again.");
    }
}

// Continue Button
function goToThankYou() {
    window.location.href = "thankyou.html";
}