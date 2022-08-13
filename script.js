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

/*Create Function to create initial string to pull possible characters from*/
function getPwStartString(){
  var pwString = "";
  while(pwString == ""){
    if(confirm("Would You Like To Include Uppercase Letters?")){
      pwString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(confirm("Would You Like To Include Lowercase Letters?")){
      pwString += "abcdefghijklmnopqrstuvwxyx";
    }
    if(confirm("Would You Like To Include Numbers?")){
      pwString += "0123456789"
    }
    if(confirm("Would You Like To Include Special Characters?")){
      pwString += " !\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~"
    }
  }
  return pwString;
}

/*function takes User-Criteria string returned by getPwStartString() and pulls random character as
indicated by user input pwLength.*/

function generatePassword(){
  var finalPw = "";
  var PwStartingString = getPwStartString();
  var pwLength = getPwLength();
  for(var i = 0; i < pwLength; i++){
    finalPw += PwStartingString.charAt(Math.floor(Math.random() * PwStartingString.length));
  }
  return finalPw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
