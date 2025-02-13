const num1 = prompt("Enter the first integer:");
const num2 = prompt("Enter the second integer:");


if (
  isNaN(num1) || isNaN(num2) || 
  num1 === "" || num2 === "" ||
  !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))
) {
  console.log("Invalid input. Please enter valid integers.");
} else {
  const number1 = Number(num1);
  const number2 = Number(num2);

  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  
  if (number2 !== 0) {
    console.log(`${number1} / ${number2} = ${number1 / number2}`);
    console.log(`${number1} % ${number2} = ${number1 % number2}`);
  } else {
    console.log("Division and modulo operations are not possible with zero as the second number.");
  }
}

  
