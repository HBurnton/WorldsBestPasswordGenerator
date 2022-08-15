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

  //Checks if length entered above is valid and a number, if not re-prompts user
  while (length < 8 || length > 128 || isNaN(length)){ 
    length = parseInt(prompt("Password Length Rejected. Please Enter Desired Length in Arabic Numeral Format between 8-128 (Inclusive)"))
    }

  return length;
}

/*Create Function to create initial string to pull possible characters from*/
function getPwStartString(){
  var pwString = "";
  while(pwString == ""){
    //Prompts user for which characters they would like to include. If confirm true, set string characters are concat'd
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
    //If there have been no added characters to the string, loop will rerun
    if(pwString == ""){
      alert("No criteria set, please choose confirm one of the following selections.")
    }
  }
  return pwString;
}

/*function takes User-Criteria string returned by getPwStartString() and pulls random character as
indicated by user input pwLength.*/

function generatePassword(){
  var finalPw = ""; 
  var PwStartingString = getPwStartString(); //Prompts user first for PW Criteria
  var pwLength = getPwLength(); //Gets user desired length of PW 
  for(var i = 0; i < pwLength; i++){ //Runs loop for pwLength, and pulls random character using charAt and adds to final PW string
    finalPw += PwStartingString.charAt(Math.floor(Math.random() * PwStartingString.length));
  }
  return finalPw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
