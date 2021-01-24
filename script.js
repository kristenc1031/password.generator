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


//i did everything below 
for (var i = 0; i <= password; i++ ){
  password = passwordText + values(Math.floor(Math.random)) * Math.floor(vaules.length)
}

var symbols = '!@#$%^&*()'; 

console.log(Math.floor(Math.random() * 26) + 97); 

console.log(Math.floor(Math.random() * 26) + 65); 

console.log(Math.floor(Math.random() * 10) + 48); 

function getRandomSymbol(){
  var symbol = '!@#$%^&*()';
  return symbol[Math.floor(Math.random()*symbol.length)];
}



