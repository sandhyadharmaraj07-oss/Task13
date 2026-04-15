// if - else statement
let gpa = 7.62;

if (gpa >= 7.5) {
  console.log("Status: First Class with Distinction");
} else if (gpa >= 6.0) {
  console.log("Status: First Class");
} else {
  console.log("Status: Pass");
}

//else if
let grade = 'A+';

switch (grade) {
  case 'O':
    console.log("Outstanding");
    break;
  case 'A+':
    console.log("Excellent");
    break;
  default:
    console.log("Grade recorded");
}

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number: " + i);
}


// While loop
let energy = 10;
while (energy > 0) {
  console.log("Learning JS...");
  energy--;
}