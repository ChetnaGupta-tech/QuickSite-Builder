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

generateWebsite.addEventListener("click", function(e){
    e.preventDefault();

    if(!businessForm.value || !businessName.value || !phone.value || !email.value)
    {
        let caution = document.createElement("small");
        caution.textContent = "Please fill all the fields before generating the website";
        caution.style.color = "red";
        
        main.appendChild(caution);
        return;
    }
})