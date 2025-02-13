const correctPassword = "secret";
let attempts = 0;
let userInput;

while (attempts < 3) {
    userInput = prompt("Enter the password:");
    attempts++;

    if (userInput === correctPassword) {
        console.log(`You entered the correct password after ${attempts} attempt(s).`);
        break;
    } else if (attempts === 3) {
        console.log(`Your account is locked! You failed to enter the correct password ${attempts} times.`);
    }
}