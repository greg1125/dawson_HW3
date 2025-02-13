const day = prompt("Enter a day of the week (sun, mon, tue, wed, thu, fri, sat) in lowercase:");

switch (day) {
  case "sun":
    console.log("You entered: sun");
    console.log("The following day is: mon");
    break;
  case "mon":
    console.log("You entered: mon");
    console.log("The following day is: tue");
    break;
  case "tue":
    console.log("You entered: tue");
    console.log("The following day is: wed");
    break;
  case "wed":
    console.log("You entered: wed");
    console.log("The following day is: thu");
    break;
  case "thu":
    console.log("You entered: thu");
    console.log("The following day is: fri");
    break;
  case "fri":
    console.log("You entered: fri");
    console.log("The following day is: sat");
    break;
  case "sat":
    console.log("You entered: sat");
    console.log("The following day is: sun");
    break;
  default:
    console.log("Invalid input. Please enter a valid three-letter abbreviation (sun, mon, tue, wed, thu, fri, sat).");
}
