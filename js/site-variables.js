// Define your variables
var companyName = process.env.COMPANY_NAME;
var phoneNumber = "{{PHONE_NUMBER}}";

// Function to update company name
function updateCompanyName() {
    var elements = document.querySelectorAll('.company-name');
    elements.forEach(function(element) {
        element.textContent = companyName;
    });
}

// Function to update phone number
function updatePhoneNumber() {
    var elements = document.querySelectorAll('.text-block-5, .text-block-5-copy, .phone_2, .phone_3, .phone_top');
    elements.forEach(function(element) {
        
        if(element.tagName === 'DIV') {
          element.textContent = phoneNumber; // Update text content
        }
        if(element.tagName === 'A') {
          element.setAttribute('href', 'tel:' + phoneNumber);
        }
    });
}

// Call the functions to update content on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCompanyName();
    updatePhoneNumber();
});

console.log('End of the site-variables file');