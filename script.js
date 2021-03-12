// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const passlength = " "
const captials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowers = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specials = "!@#$%^&*";


// password generator function prompts
function generatePassword() {

 var finalPassword="";
 var allowedChars = "";

// var passwordLength = window.prompt{}
var passwordLength = prompt("how many characters would you like your password to contain");
var hasNumeric = confirm("do you want to include numeric values");
var hasUppercase = confirm("do you want uppercase letters");
var hasLowercase = confirm("do you want to add lowercase letters");
var hasSpecialc = confirm("do you want to add special characters");
console.log(passwordLength)
console.log(hasNumeric)
console.log(hasLowercase)
console.log(hasSpecialc)
console.log(hasUppercase)

var possibleCharacters=""; 
if (hasNumeric===true) {
  var possibleCharacters = possibleCharacters.concat(numbers);
  console.log(possibleCharacters)
}

if (hasLowercase===true) {
  var possibleCharacters = possibleCharacters.concat(lowers);
  console.log(possibleCharacters)
}

if (hasSpecialc===true) {
  var possibleCharacters = possibleCharacters.concat(specials);
  console.log(possibleCharacters)
}

if (hasUppercase===true) {
  var possibleCharacters = possibleCharacters.concat(captials);
  console.log(possibleCharacters)
}
}

var randIndex = Math.floor(Math.random() *possibleCharacters.length);

// grab one character randomly
// create a for loop, from 0 to password.length

//var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//var result = ""
//var chaactersLength = characters.length;

//for ( var i = 0; i < 5 ; i++ ) {
  //  result += characters.charAt(Math.floor(Math.random() * chaactersLength));
//}

//console.log(result)