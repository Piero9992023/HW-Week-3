// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArr =[]
var characterLength = 8 < 128
var specialCharacterArr = ["~","!","@","#","$","%","^","&","*","(",")","/","?","<",">",";",":","+","_", "-"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword() {
  var password = "";
  for (var i=0; i <characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  } 

  return password;
} 


function getPrompts() {
  choiceArr=[];

  characterLength = parseInt(prompt("How many characters would you like in your password? (8 - 128 character)")); //parseInt will return Nan(not a number) and will say to try again since chosen number or character was not a numerical value between 8 and 128 

    if(isNaN(characterLength) || characterLength < 8  || characterLength > 128) {
      alert("Character length has to be a number from 8 to 128. Please try again.");
      return false;
    }

    if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);

    }
    
    if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);

    }

    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharacterArr);

    }

    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);

    }

  return true;
}



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var correctPrompts = getPrompts();

    if (correctPrompts) { 
      var password = generatePassword();
      passwordText.value = password;
  } else{
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
