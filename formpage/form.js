let myInput = document.getElementById("psw");
let confInput = document.getElementById("cpsw");
let letter = document.getElementById("letter");
let capital= document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length")
//the next section is for programming confirm
confInput.onkeyup = function() {
  if (myInput.value === confInput.value){
    confInput.classList.remove("invalid");
    confInput.classList.add("valid");
  }else{
    confInput.classList.remove("valid");
    confInput.classList.add("invalid");
  }
};

//the next section it was provided to WSC

// myInput.onfocus = function () {
//   document.getElementById("message").style.display = "block";
// };

// myInput.onblur = function () {
//   document.getElementById("message").style.display = "none";
// };

myInput.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if (myInput.value.match(lowerCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }else{
    letter.classList.remove("valid");
    letter.classList.add("valid")
  };
  if(myInput.value.match(upperCaseLetters)){
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  }else{
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  };
  if(myInput.value.match(numbers)){
    number.classList.remove("invalid");
    number.classList.add("valid");
  }else{
    number.classList.remove("valid");
    number.classList.add("invalid");
  };
  if(myInput.value.length >= 8){
    length.classList.remove("invalid");
    length.classList.add("valid");
  }else{
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
};
// myInput.onkeyup = function() {
//   let upperCaseLetters = /[A-Z]/g;
//   if (myInput.value.match(upperCaseLetters)){
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   }else{
//     letter.classList.remove("valid");
//     letter.classList.add("valid");
//   };
// }
//
//#The next section have the custom validate
// let firstname = document.getElementById("firstname");

// firstname.addEventListener("input", (event) =>{ 
//   if (firstname.validity.tooShort){
//     firstname.setCustomValidity("Min char: 3, Max 15, Number allowed");
//   }else{
//     firstname.setCustomValidity("");
//   }
// });

// let email = document.getElementById("mail")

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch){
//     email.setCustomValidity("This field is required")
//   }else{
//     email.setCustomValidity("")
//   }
// });

let form = document.querySelector("form");
let email = document.getElementById("mail");
let emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid){
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address";
  }else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  }else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} chraracters, you entered ${email.value.length}`;
  }
  emailError.className = "error active";
};