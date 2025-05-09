
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.getElementById("form");

const error_fname = document.getElementById("fname-error");
const error_lname = document.getElementById("lname-error");
const error_email = document.getElementById("email-error");
const error_password = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // first name validation
    if (fname.value === "" || fname.value == null) {
        e.preventDefault();
        error_fname.innerHTML = "First Name connot be empty";
        fname.style.border = " 2px solid #ff7a7a";
        fname.classList.add("icon-error");
    } else {
        error_fname.innerHTML = "";
        fname.style.border = "1px solid #ccc"
    }
    // second name validation
    if (lname.value === "" || lname.value == null) {
        e.preventDefault();
        error_lname.innerHTML = "Last Name connot be empty";
        lname.style.border = " 2px solid #ff7a7a"
        lname.classList.add("icon-error");
    } else {
        error_lname.innerHTML = "";
       lname.style.border = "1px solid #ccc"
    }
    // password validation  
    if (password.value === "" || password.value == null) {
        e.preventDefault();
        error_password.innerHTML = "Password connot be empty";
        password.style.border = " 2px solid #ff7a7a";
        password.classList.add("icon-error");
    } else if (password.value.length <= 6) {
        e.preventDefault();
        error_password.innerHTML = "Password connot be less then 6 character";
        password.style.border = " 2px solid #ff7a7a"
        password.classList.add("icon-error");
    } else if (password.value.length >= 12) {
        e.preventDefault();
        error_password.innerHTML = "Password connot be greater then 12 character";
        password.style.border = " 2px solid #ff7a7a"
        password.classList.add("icon-error");
    } else {
        error_password.innerHTML = " ";
        password.style.border = "1px solid #ccc"
    }

    //email validation
    if (email.value === "" || email.value == null) {
        e.preventDefault();
        error_email.innerHTML = "email connot be empty";
        email.style.border = " 2px solid #ff7a7a"
        email.classList.add("icon-error");
    } else if (!email.value.match(pattern)) {
        e.preventDefault();
        error_email.innerHTML = "looks like this is not an email";
        email.style.border = " 2px solid #ff7a7a"
        email.classList.add("icon-error");
    } else {
        error_email.innerHTML = "";
        email.style.border = "1px solid #ccc"
    }
});
