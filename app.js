alert("HELLO WORLD!");
var cityName = prompt("Enter city name: ");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}
var gender = prompt("Enter your gender: ");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Greetings!");
}

var signalColor = prompt("Enter the color of the road traffic signal: ");

switch (signalColor.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid color");
}
var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}
// Taking input for marks obtained in three subjects and total marks
var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1: "));
var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2: "));
var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3: "));
var totalMarks = parseFloat(prompt("Enter total marks: "));

// Calculating total obtained marks and percentage
var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (obtainedMarks / totalMarks) * 100;

// Determining the grade based on the percentage
var grade;

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

// Displaying the result
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
