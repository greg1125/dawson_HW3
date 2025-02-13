const name = prompt("Enter your name:");
const units = prompt("Enter the number of units you have completed:");

if (isNaN(units)){
  console.log("Invalid input. Please enter a non-negative whole number for units.");
} else {
  const number = Number(units);
  let gradeStanding = "";

  if (number >= 0 && number <= 30) {
    gradeStanding = "Freshman";
  } else if (number >= 31 && number <= 60) {
    gradeStanding = "Sophomore";
  } else if (number >= 61 && number <= 90) {
    gradeStanding = "Junior";
  } else {
    gradeStanding = "Senior";
  }

  console.log(`Hello ${name}`);
  console.log(`Your grade standing is ${gradeStanding}`);
}
