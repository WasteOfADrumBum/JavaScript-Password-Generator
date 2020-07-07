// GenerateBtn
var generateBtn = document.querySelector("#generate");

// Call function to generate password 
/* generatePassword(); */

// Write generated password on page
/* document.getElementById("password").innerHTML = userPassword;  */

// From selected options randomly generate password.
function generatePassword() {
    // Define variables
  var selectLowerCase;
  var selectUpperCase;
  var selectNumber;
  var selectSpecial;

  // Set variables  
  var plength = 0;
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  // Uppercase conversion
  var upperCase = lowerCase.toUpperCase();
  var numbers = "1234567890";
  var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
  var userPassword = "";
  var passwordGroup = "";

  // Clear Text
  var passwordText = document.querySelector("#password");
  if (passwordText.value) {
    passwordText.value = "";
  }
  // Request length of the password
  var plength = parseInt(prompt("Welcome to Password Generator 2020. To begin, please enter a length of your password from 8-128.",""));
  // Require number
  while (isNaN(plength)) {
  var plength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128.",""));
  } 
  // Require length    
  while (plength < 8 || plength > 128) {
  var plength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));
  } 
  // Confirm lower case letters 
  var selectLowerCase = confirm("Use lower case letters?");
  // Confirm upper case letters
  var selectUpperCase = confirm("Use upper case letters?");
  // Confirm numeric characters 
  var selectNumber = confirm("Use numbers?");
  // Confirm special characters
  var selectSpecial = confirm("Use special characters?");
  // Combine Selections to generate password
  if (selectLowerCase) {
  passwordGroup += lowerCase;
  }
  if (selectUpperCase) {
  passwordGroup += upperCase;
  }
  if (selectNumber) {
  passwordGroup += numbers;
  }
  if (selectSpecial) {
  passwordGroup += specialCharacter;
  }
  for (let i = 0; i < plength; i++) {
    userPassword += passwordGroup.charAt(
    Math.floor(Math.random() * passwordGroup.length)
    );
  }
  console.log(selectSpecial);
  return userPassword;
}

// Function writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  /* selectLowerCase=null;
  selectUpperCase=null;
  selectNumber=null;
  selectSpecial=null; */
}

// Event Listener
generateBtn.addEventListener("click", writePassword);

/* || COPY FUNCTION || */

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}