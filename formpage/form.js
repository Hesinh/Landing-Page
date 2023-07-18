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