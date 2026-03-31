// Selecting elements

let header = document.querySelector(".header");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");

let businessForm = document.querySelector("#businessForm");

let businessName = document.querySelector("#businessName");
let businessType = document.querySelector("#businessType");
let products = document.querySelector("#products");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

let generateWebsite = document.querySelector("#generateWebsite");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Hide button initially

generateWebsite.style.visibility = "hidden";


// Function to check required fields

function checkRequiredFields() {

    if (
        businessName.value.trim() &&
        phone.value.trim() &&
        email.value.trim()
    ) {
        generateWebsite.style.visibility = "visible";
    }
    else {
        generateWebsite.style.visibility = "hidden";
    }

}


// Listen to input changes

businessName.addEventListener("input", checkRequiredFields);
phone.addEventListener("input", checkRequiredFields);
email.addEventListener("input", checkRequiredFields);



// Handle button click

generateWebsite.addEventListener("click", function(e) {
    e.preventDefault();
    // Remove old warning message if exists
    let existingMessage = document.querySelector("#caution");
    if (existingMessage) {
        existingMessage.remove();
    }
    // Final validation
    if (
        !businessName.value.trim() ||
        !phone.value.trim() ||
        !email.value.trim()
    ) {
        let caution = document.createElement("small");
        caution.id = "caution";
        caution.textContent =
            "Please fill all required fields before generating the website";
        caution.style.color = "red";
        caution.style.display = "block";
        caution.style.marginTop = "10px";
        main.appendChild(caution);
        return;
    }
    // Capture form data into object
    let businessData = {
        name: businessName.value.trim(),
        type: businessType.value.trim(),
        products: products.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        address: address.value.trim()

    };
    // Test output
    console.log("Website Generated Successfully");
    console.log(businessData);

    if (!emailPattern.test(email.value.trim())) {
    showError("Please enter a valid email address");
    return;
}
});