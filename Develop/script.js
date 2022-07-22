// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables for length in parsed number to make globally avaiable
var lengthInt= 0
//Sets the minimum & maximum length of a password
var minlength = 8
var maxlength = 128
//All possible characters in each catagory in string format
var UpChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LoChar ="abcdefghijklmnopqrstuvwxyz"
var numChar ="0123456789"
var SpChar ="!£$%&*#@?><'"
//setup of array which will hold avaiable characters for password
var PasArray = []
//Password default & document selection of text box for password
var pass = "Click for a secure password"
var passwordText = document.querySelector("#password");
//writes default password to text box on page reload
passwordText.value = pass;


//New Function
//Checking type of characters to be used
function PasArrayGen(){
  //Characters to be used to generate password, defaulted empty, is concated with the optional catagories above
var PasChar =""
  //Asks user if they'd like capitals, if true, concats UpChar (Upper case characters) to PasChar (Array of characters to be used for password generation)
  //loops till an allowable collection of characters has been made
  for(let i =0; i < 1; i++){
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
//checks if the user didnt select any characters, if so, restarts the loop
if(PasChar == ""){
  alert("Please select at least one set of characters")
  i--
}}
//splits PasChar from a string to an array with an entry for every character [A],[B],[C] etc
PasArray = PasChar.split("")
}


//New Function
//Asking and checking password length
function PasLenght() {
  //loops till an appropriate length has been selected
  for(let i = 0; i <1; i++ ){
//asks user for Password length
var length = (prompt("Password length",""));
//converts user responce from string to number
lengthInt = parseInt(length)

//checks if lengthInt is a number
if(Number.isInteger(lengthInt)==false){
  //if lengthInt is not a number, requests user to type a number
  alert("Type a number")
  i--
} else if (lengthInt < minlength ){
  //if lengthInt is a number, but its less than the minimum, requests user to use a longer password
  alert("Password is not long enough")
  i--
} else if (lengthInt > maxlength) {
  //if lengthInt is a number, but its more than the max, requests user to use a shorter password
  alert("Password is too long")
  i--
}}}


//New Function
//Function to generate Password using the length and Array of characters previously calculated
function generatePassword(lengthInt,PasArray){
  //Wipes Pass variable clean of default
  pass="" 
  //for loop, continues for length of lengthInt, has a number N which is the length of the array to allow for random selection using Math.Random
  for(let i = 0;i < lengthInt; ++i) {
    //math.random of 0 to index of last char in PasArray, using floor to make it an interger, which then selects the index of the random number
    pass += PasArray[(Math.floor(Math.random() * PasArray.length))];
  }
}


// Write password to the #password input
function writePassword() {
  //Run function to generate the array of characters
  PasArrayGen()
  //Run function to get length of password
  PasLenght()
  //Run function to generate random password using output from previous functions 
  generatePassword(lengthInt,PasArray);
  //writes generated password to text box
  passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
