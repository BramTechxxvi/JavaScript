const prompt = require("prompt-sync")();
const getPasswordLength = function(number) {
     if (!number ||number === "") {
         console.log("Invalid input... enter again");
         return;
     } number = parseInt(number)
     if (number < 8 || number > 16) {
         console.log("Invalid input... enter length between 8 -16");
         return;
     } return number;
}
const generatePassword = (length, character) => {
    let result = "";
    for (let count = 0; count < length; count++) {
        let randomPass = Math.floor(Math.random() * character.length);
        result+=character[randomPass];
    } return result;
}
const main = () => {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let characterAdd = "";
    let passwordLength;
    do {
        passwordLength = getPasswordLength(prompt("Enter password length: "));
    }while(!passwordLength)

    let includeUppercase = prompt("Include Uppercase letters? (Y/N): ").toUpperCase();
    if (includeUppercase === "Y") characterAdd+=uppercase;
    let includeLowercase = prompt("Include Lowercase letters? (Y/N): ").toUpperCase();
    if (includeLowercase === "Y") characterAdd+=lowercase;
    let includeNumbers = prompt("Include Numbers? (Y/N): ").toUpperCase();
    if (includeNumbers === "Y") characterAdd += numbers;
    let includeSpecialChar = prompt("Include Special Characters? (Y/N): ").toUpperCase();
    if (includeSpecialChar === "Y") characterAdd += specialChar;
    if (characterAdd === "") {
        console.log("Error... No character type selected");
        return;
    } const password = generatePassword(passwordLength, characterAdd);
    console.log(password)
}
main();