// Assignment Code


var lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]; 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9",];

var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

var userChoiceLength;

var userChoice;

var generateBtn = document.querySelector("#generate");

function generatePassword() {

userChoiceLength = window.prompt("Choose a password thats between 8 - 128 character long");

if(userChoiceLength < 8 || userChoiceLength > 128) {
    window.alert("Password criteria not met, try again.");
} else {

var userOptionLowerCase = window.confirm("Do you want to use lower case letters?");
var userOptionUpperCase = window.confirm("Do you want to use upper case letters?");
var userOptionNumber = window.confirm("Do you want to use numbers?");
var userOptionSpecialChar = window.confirm("Do you want to use any special characters?");

}

if (!userOptionLowerCase && 
    !userOptionUpperCase && 
    !userOptionNumber &&
    !userOptionSpecialChar) {
      userChoice = window.alert("Password critera not met: must include lower case or upper case letters, numbers or special characters."); 
    }
    







}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
