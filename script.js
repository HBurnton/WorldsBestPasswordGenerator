// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* Create Function to get PW Length from User */
function getPwLength(){
  var length = 0;
  length = parseInt(prompt("Please enter the desired length of password.\nEnter 8-128."));
  while (length < 8 || length > 128 || isNaN(length)){
    length = parseInt(prompt("Password Length Rejected. Please Enter Desired Length in Arabic Numeral Format between 8-128 (Inclusive)"))
    }
  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
