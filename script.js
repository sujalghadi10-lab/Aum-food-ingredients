/* =========================================
   AUM FOOD INGREDIENTS
   JAVASCRIPT - PURCHASE FORM
   GOOGLE SHEET ORDER SUBMISSION
   ========================================= */

const scriptURL =
"https://script.google.com/macros/s/AKfycby33H4NFmYYnf-Xz7QIrWM4ZEhJNMwmdYNfEEdU1KvZdahvqV7rLhbb7TEKZC1PJzsszg/exec";


/* =========================================
   PURCHASE FORM VALIDATION + SUBMISSION
   ========================================= */

function validateForm() {

    // Get values
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


    // ================= SEND TO GOOGLE SHEET =================

    let formData = new FormData();

    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("product", product);
    formData.append("quantity", quantity);
    formData.append("address", address);


    alert("Placing your order...");


    fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(function () {

        alert(
            "Order placed successfully! ✅\n\n" +
            "Thank you for choosing Aum Food Ingredients."
        );

        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("product").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("address").value = "";

    })
    .catch(function (error) {

        console.error("Order Error:", error);

        alert(
            "Something went wrong ❌\n\n" +
            "Please try again."
        );

    });


    // Stop normal form submission
    return false;
}


/* =========================================
   WEBSITE LOADED
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Aum Food website loaded successfully.");

});
