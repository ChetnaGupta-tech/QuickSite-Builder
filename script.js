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
let phonePattern = /^[0-9]{10}$/;
let templatesSection = document.querySelector("#templatesSection");
let createWebsiteBtn = document.querySelector("#createWebsiteBtn");
let loaderOverlay = document.querySelector("#loaderOverlay")

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
    if (!phonePattern.test(phone.value.trim())) {
        showError("Phone number must be exactly 10 digits");
        return;
    }

    templatesSection.style.display = "block";
    templatesSection.scrollIntoView({behavior:"smooth"})
});

// Card selection
let cards = document.querySelectorAll(".templateCard");
let selectedTemplate = null;

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        /* Remove selection from all cards */
        cards.forEach(function(c) {
            c.classList.remove("selected");
        });
        /* Add selection to clicked card */
        card.classList.add("selected");
        /* Store selected template */
        selectedTemplate = card.dataset.template;
        console.log("Selected Template:", selectedTemplate);
    });
});

createWebsiteBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!selectedTemplate) {
        alert("Please select a template first");
        return;
    }

    /* Create data object */

    let websiteData = {

        name: businessName.value,
        type: businessType.value,
        products: products.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        template: selectedTemplate

    };

    console.log("Saving data:", websiteData);

    /* Save data FIRST */

    localStorage.setItem(
        "websiteData",
        JSON.stringify(websiteData)
    );
    console.log(
        "Stored value:",
        localStorage.getItem("websiteData")
    );
    /* Show loader */

    loaderOverlay.style.display = "flex";

    /* Wait and open page */

    setTimeout(function () {

        window.open("generated.html", "_blank");

        loaderOverlay.style.display = "none";

    }, 3000);

});