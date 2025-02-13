const num = Number(prompt("Enter a number:")); 

console.log(`Multiplication Table for ${num}:`);

for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
