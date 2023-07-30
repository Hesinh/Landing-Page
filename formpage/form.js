let myInput = document.getElementById("psw");
let confInput = document.getElementById("cpsw");
let letter = document.getElementById("letter");
let capital= document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length")
//the next section is for programming confirm
confInput.onkeyup = function() {
  if (myInput.value === confInput.value){
    confInput.classList.remove("invalid-input");
    confInput.classList.add("valid-input");
  }else{
    confInput.classList.remove("valid-input");
    confInput.classList.add("invalid-input");
  }
};

//the next section it was provided to WSC

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

let firstname = document.getElementById("firstname")
let firstnameError = document.querySelector("#firstname + span.required");

let lastname = document.getElementById("lastname");
let lastnameError = document.querySelector("#lastname + span.required");
let phone = document.getElementById('phone');

firstname.addEventListener("input", (event) => {
  if (firstname.validity.valid){
    firstnameError.textContent = "Valid name"
    firstname.classList.remove('invalid-input');
    firstname.classList.add('valid-input');
  }else{
    // showError();
    firstname.classList.remove('valid-input');
    firstname.classList.add('invalid-input');
  }
});

lastname.addEventListener("input", (event) =>{
  if (lastname.validity.valid){
    lastnameError.textContent = "Valid name"
    lastname.classList.remove('invalid-input');
    lastname.classList.add('valid-input');
  }else{
    // showError();
    lastname.classList.remove('valid-input');
    lastname.classList.add('invalid-input');
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid){
    emailError.textContent = "Valid email";
    emailError.className = "error";
    email.classList.remove("invalid-input");
    email.classList.add("valid-input");
  } else {
    email.classList.remove("valid-input");
    email.classList.add("invalid-input");
    // showError();
  }
});

phone.addEventListener("input", (event) => {
  if (phone.validity.valid) {
    phone.classList.remove("invalid-input");
    phone.classList.add("valid-input");
  }else{
    showError()
  }
});

myInput.addEventListener("input", (event) =>{
  if (myInput.validity.valid) {
    myInput.classList.remove('invalid-input');
    myInput.classList.add('valid-input');
  }else{
    myInput.classList.remove('valid-input');
    myInput.classList.add('invalid-input');
  };

  if (myInput.value === confInput.value){
    confInput.classList.remove("invalid-input");
    confInput.classList.add("valid-input");
  }else{
    confInput.classList.remove("valid-input");
    confInput.classList.add("invalid-input");
  };
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }else if (!firstname.validity.valid){
    showError();
    event.preventDefault();
  }else if(!lastname.validity.valid){
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address";
    email.classList.remove('valid-input');
    email.classList.add('invalid-input');
  }else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  }else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} chraracters, you entered ${email.value.length}`;
  }
  if (firstname.validity.valueMissing){
    firstname.classList.remove('valid-input');
    firstname.classList.add('invalid-input');
    firstnameError.textContent = 'Enter a valid name';
  };

  if (lastname.validity.valueMissing){
    lastname.classList.remove('valid-input');
    lastname.classList.add('invalid-input');
    lastnameError.textContent = 'Enter a valid name';
  };

  if (phone.validity.valueMissing) {
    phone.classList.remove('valid-input');
    phone.classList.add('invalid-input');
  };

  if (myInput.validity.valueMissing) {
    myInput.classList.remove('valid-input');
    myInput.classList.add('invalid-input');
  };

  if (confInput.validity.valueMissing) {
    confInput.classList.remove('valid-input');
    confInput.classList.add('invalid-input');
  };
};