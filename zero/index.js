const email = document.getElementById("email");
const password = document.getElementById("password");
const myForm = document.getElementById("form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue == "smu@smu.tn" && passwordValue == "123456") {
        alert("welcome");
    }
    else if (emailValue != "smu@smu.tn") {
        alert("Wrong email!");
    }
    else if (passwordValue != "123456") {
        alert("Wrong password!");
    }
}