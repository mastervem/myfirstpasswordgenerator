
var generateBtn = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacters = "!@#$%&*?~:";
let temporaryPassword = "";

console.log('temporaryPassword ', temporaryPassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
  temporaryPassword =""
  let passLength = prompt("Please choose length of password within 8 and 128");
let password =""
  console.log('passLength ',passLength)


  let lowerCaseQuestion = confirm("Would you like lowercases?")

  if(lowerCaseQuestion){
   
    temporaryPassword = temporaryPassword + lowercase
  }
let specialCharactersQuestion = confirm("Would you like special characters?")
if(specialCharacters){
  
  temporaryPassword = temporaryPassword + specialCharacters
}
let uppercaseQuestion = confirm("would you like uppercase")
if(uppercase){
 
  temporaryPassword = temporaryPassword + uppercase
} 
console.log('temporaryPassword after push  ', temporaryPassword)
console.log
for (let index = 0; index <passLength; index++) {
  password += temporaryPassword[Math.floor(Math.random() * temporaryPassword.length)];

}
return password;
  
   
}


generateBtn.addEventListener("click", writePassword);
