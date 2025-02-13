const number = Number(prompt("Enter a number between 1 and 100:"));

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else if (number >= 1 && number <= 100) {
  console.log(`${number} is within the range of 1 to 100.`);
} else {
  console.log(`${number} is out of the valid range.`);
}