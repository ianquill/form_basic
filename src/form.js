const form = document.querySelector('form');

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const pwd = document.getElementById("pwd");
const pwdConf = document.getElementById("pwdconf");

const inputs = [email, country, zipcode, pwd, pwdConf];


for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        console.log(inputs[i].checkValidity());
    });
} 

// function validate(input) {
//     return input.checkValidity();
// };


