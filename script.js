// Assignment Code
var generateBtn = document.querySelector("#generate");
var password - document.querySelector("#password");


function myFunction() { //i put this in
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


generateEl.addEventListener('click', () =>{
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});


//i did everything below 
var Password = {
 
  _pattern : /[a-zA-Z0-9_\-\+\.]/,

for (var i = 0; i <= password; i++ ){
  password = passwordText + values(Math.floor(Math.random)) * Math.floor(vaules.length)
}

// var getRandomSymbol = '!@#$%^&*()'; 

const randomFunc = {
  lowerCase: getRandomLower,
  upperCase: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}
function getRandomSymbol(){
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random()*symbols.length)];
}
console.log(Math.floor(Math.random() * 26 + 97));
console.log(Math.floor(Math.random() * 26 + 65));
console.log(Math.floor(Math.random() * 10+ 48));
