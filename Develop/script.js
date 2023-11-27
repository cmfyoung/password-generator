// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array legend 
const upperArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerArray = 'abcdefghijklmnopqrstuvwxyz';
const symbolArray = '#$%&*+,-./:;<=>?@\^_`{|}~';
const numArray = '0123456789';

//Main function 
function generatePassword() {
    var fullArray = [];
    var password = "";
    var passwordLength = prompt("Password must be between 8 and 128 characters");

//Prompts for character selection confirmation 
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
        alert("Password must be between 8 and 128 characters");
        return;
    }
    else {
        var includeLower = confirm("Do you want to include Lowercase Letters?");
        var includeUpper = confirm("Do you want to include Uppercase Letters?");
        var includeNumbers = confirm("Do you want to include Numbers?");
        var includeSymbols = confirm("Do you want to include Special Characters?");

    }
//Combined selected character arrays via addition assignment, would concat be better?
    var characters = '';
    if (includeLower) characters += lowerArray;
    if (includeUpper) characters += upperArray;
    if (includeNumbers) characters += numArray;
    if (includeSymbols) characters += symbolArray;

//Confirmation of minimum character selection 
    if (characters === '') {
        alert("Please select at least one character type.");
        return;
    }

//Password generator loop for characters which pushes into the "fullArray"
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        fullArray.push(characters[randomIndex]);
    }

// Function returns password by joining "fullArray" into a string. 
    return fullArray.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
  }