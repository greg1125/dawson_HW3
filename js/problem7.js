
const hours = Number(prompt("Enter hours (0-23):"));
const minutes = Number(prompt("Enter minutes (0-59):"));
const seconds = Number(prompt("Enter seconds (0-59):"));


if (
    isNaN(hours) || !Number.isInteger(hours) || hours < 0 || hours > 23 ||
    isNaN(minutes) || !Number.isInteger(minutes) || minutes < 0 || minutes > 59 ||
    isNaN(seconds) || !Number.isInteger(seconds) || seconds < 0 || seconds > 59
) {
    console.log("Invalid input. Please enter valid time values.");
} else {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);


    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds + 1;

    if (newSeconds === 60) {
        newSeconds = 0;
        newMinutes++;
        if (newMinutes === 60) {
            newMinutes = 0;
            newHours++;
            if (newHours === 24) {
                newHours = 0;
            }
        }
    }

    console.log(`One second later: ${newHours}h${newMinutes}m${newSeconds}s`);
}
