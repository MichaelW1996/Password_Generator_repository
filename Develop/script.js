// Assignment Code
var generateBtn = document.querySelector("#generate");

//Default options for different characters
var Caps = false;
var lower = false;
var Numbers = false;
var special = false;
//setting up variables for length, in string & parsed number
var length = "0";
var lengthInt= 0;
//All possible characters in each catagory in string format
var UpChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LoChar ="abcdefghijklmnopqrstuvwxyz"
var numChar ="0123456789"
var SpChar ="!£$%&*#@?><'"
//Characters to be used to generate password, defaulted empty, is concated with the optional catagories above
var PasChar =""
//setup of variable as variable conversion of PasChar
var PasArray = []
//Sets the minimum length of a password
var minlength = 8;


//New Function
//Checking type of characters to be used
function PasArrayGen(){
  //Asks user if they'd like capitals, if true, concats UpChar (Upper case characters) to PasChar (Array of characters to be used for password generation)
if(confirm("Captial letters?")==true){
  PasChar= PasChar.concat(UpChar)
}
//Asks user if they'd like lowercase letters, if true, concats LoChar (lower case characters) to PasChar (Array of characters to be used for password generation)
if(confirm("Lower case letters?")==true){
  PasChar= PasChar.concat(LoChar)
}
//Asks user if they'd like numbers, if true, concats numChar (numbers) to PasChar (Array of characters to be used for password generation)
if(confirm("Numbers?")==true){
  PasChar= PasChar.concat(numChar)
}
//Asks user if they'd like special characters, if true, concats SpChar (special characters) to PasChar (Array of characters to be used for password generation)
if(confirm("Special Characters?")==true){
  PasChar= PasChar.concat(SpChar)
}
//Asks user if they'd like capitals, if true, concats UpChar (Upper case characters) to PasChar (Array of characters to be used for password generation)
if(PasChar == ""){
  alert("Try again")
}
//splits PasChar from a string to an array with an entry for every character [A],[B],[C] etc
PasArray = PasChar.split("")
}


//New Function
//Asking and checking password length
function PasLenght() {

//asks user for Password length
length = (prompt("Password length",""));
//converts user responce from string to number
lengthInt = parseInt(length)

//checks if lengthInt is a number
if(Number.isInteger(lengthInt)==false){
  //if lengthInt is not a number, requests user to type a number
  alert("Type a number")
  i--
} else if (lengthInt < minlength ){
  //if lengthInt is a number, but its less than the minimum, requests user to use a longer password
  alert("Passwords must be more than ", minlength, "characters")
  i--
}}


//New Function
//Function to generate Password using the length and Array of characters previously calculated
function generatePassword(lengthInt,PasArray){
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
