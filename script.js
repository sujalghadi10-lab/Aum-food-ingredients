/* =========================================
   AUM FOOD INGREDIENTS
   JAVASCRIPT - PURCHASE FORM VALIDATION
   ========================================= */


/* =========================================
   PURCHASE FORM VALIDATION
   ========================================= */

function validateForm() {

    // Get values from form
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let address = document.getElementById("address").value.trim();


    // ================= NAME =================

    if (name === "") {
        alert("Please enter your full name.");
        document.getElementById("name").focus();
        return false;
    }

    // Name should contain only letters and spaces
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Please enter a valid name.");
        document.getElementById("name").focus();
        return false;
    }


    // ================= MOBILE =================

    if (mobile === "") {
        alert("Please enter your mobile number.");
        document.getElementById("mobile").focus();
        return false;
    }

    // Indian mobile number - 10 digits starting from 6-9
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        document.getElementById("mobile").focus();
        return false;
    }


    // ================= PRODUCT =================

    if (product === "") {
        alert("Please select a product.");
        document.getElementById("product").focus();
        return false;
    }


    // ================= QUANTITY =================

    if (quantity === "") {
        alert("Please enter quantity.");
        document.getElementById("quantity").focus();
        return false;
    }

    if (Number(quantity) <= 0) {
        alert("Quantity must be greater than 0.");
        document.getElementById("quantity").focus();
        return false;
    }


    // ================= ADDRESS =================

    if (address === "") {
        alert("Please enter your address.");
        document.getElementById("address").focus();
        return false;
    }

    if (address.length < 10) {
        alert("Please enter a complete address.");
        document.getElementById("address").focus();
        return false;
    }


    // ================= SUCCESS =================

    alert(
        "Order placed successfully!\n\n" +
        "Thank you for choosing Aum Food Ingredients."
    );

    return true;
}


/* =========================================
   WEBSITE LOADED MESSAGE
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Aum Food website loaded successfully.");

});