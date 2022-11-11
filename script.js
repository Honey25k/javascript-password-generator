// Assignment Code


var lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9",];

var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var userChoiceLength;

var userChoice;

// The function to generate password
function generatePassword() {

userChoiceLength = window.prompt("Choose a password between 8 - 128 characters long");

// Alert for user to enter a password between 8 and 128 characters.
if(userChoiceLength < 8 || userChoiceLength > 128) {
    window.alert("Password criteria not met, try again.");
} else {

var userOptionLowerCase = window.confirm("Do you want to use lower case letters?");
var userOptionUpperCase = window.confirm("Do you want to use upper case letters?");
var userOptionNumber = window.confirm("Do you want to use numbers?");
var userOptionSpecialChar = window.confirm("Do you want to use any special characters?");

}
// If the user does not select any of these criteria, an alert message will pop up.
if (!userOptionLowerCase && 
    !userOptionUpperCase && 
    !userOptionNumber &&
    !userOptionSpecialChar) {
    userChoice = window.alert("Password critera not met: must include lower case or upper case letters, numbers or special characters."); 
    } 
    
    // Scenario one user choose all options.
   else if (userOptionLowerCase && 
            userOptionUpperCase && 
            userOptionNumber && 
            userOptionSpecialChar) {
      userChoice = lowerCase + upperCase + numbers + specialChar; 
    } 

    // Scenario two, user choose three options of four alternatives.
    else if(userOptionUpperCase && userOptionNumber && userOptionSpecialChar) {
        userChoice =  upperCase + numbers + specialChar;
      } 

    else if(userOptionLowerCase && userOptionNumber && userOptionSpecialChar){
      userChoice = lowerCase + numbers + specialChar;
    }

    else if(userOptionUpperCase && userOptionLowerCase && userOptionNumber){
      userChoice = upperCase + lowerCase + numbers;
    }

    else if(userOptionUpperCase + userOptionLowerCase + userOptionSpecialChar){
      userChoice = upperCase + lowerCase + specialChar;
    }
    
    // Scenario three, user choose two options of four alternatives.
    else if(userOptionLowerCase && userOptionUpperCase) {
      userChoice = lowerCase + upperCase;
    } 

    else if(userOptionLowerCase && userOptionNumber) {
      userChoice = lowerCase + numbers;
    }

    else if(userOptionLowerCase && userOptionSpecialChar) {
      userChoice = lowerCase + specialChar;
    }

    else if(userOptionUpperCase && userOptionNumber) {
      userChoice = upperCase + numbers;
    }

    else if(userOptionUpperCase && userOptionSpecialChar) {
      userChoice = upperCase + specialChar;
    }

    else if(userOptionNumber && userOptionSpecialChar) {
      userChoice = numbers + specialChar;
    }

    // Scenario four, if user only choose one of four alternatives. 
    else if(userOptionLowerCase) {
      userChoice = lowerCase;
    }
    else if(userOptionUpperCase) {
      userChoice = upperCase;
    }
    else if(userOptionNumber) {
      userChoice = numbers;
    }
    else if(userOptionSpecialChar) {
      userChoice = specialChar;
    }

    // A new variable to store generated password 
    var newPasswordStorage = [];

    for(var i = 0; i < userChoiceLength; i++) {
      var userChoiceOne  = userChoice[Math.floor(Math.random() * userChoice.length)];
      newPasswordStorage.push(userChoiceOne);
    }
      var selectedPassword = newPasswordStorage.join("");
      
      return selectedPassword;

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
