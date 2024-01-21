// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let temporaryPassword = [];

console.log('temporaryPassword ', temporaryPassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
  let passLength = prompt("Please choose length of password within 8 and 128");

  console.log('passLength ',passLength)


  let lowerCaseQuestion = confirm("Would you like lowercases?")

  if(lowerCaseQuestion){
    temporaryPassword.push(lowercase)
  }

  console.log('temporaryPassword after push  ', temporaryPassword)


  
  // return final data 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
