// question 8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
  
var studentNames = ["Alina", "Eman", "Sarah"];
var scores = [];
var totalMarks = 500;

function calculatePercentage(score) {
  return (score / totalMarks) * 100;
}

for (var i = 0; i < studentNames.length; i++) {
  var score = parseInt(prompt("Enter score for " + studentNames[i]));
  scores.push(score);
}

// Display scores and percentages
for (var i = 0; i < studentNames.length; i++) {
  var percentage = calculatePercentage(scores[i]);
  console.log(studentNames[i] + ": Score: " + scores[i] + ", Percentage: " + percentage.toFixed(2) + "%");
}







// // Array to store student names
// var studentNames = ["John", "Emma", "Ryan"];

// // Array to store student scores
// var studentScores = [450, 400, 480];

// // Calculate percentages and display scores and percentages
// for (var i = 0; i < studentNames.length; i++) {
//   var percentage = (studentScores[i] / 500) * 100;
//   console.log(
//     studentNames[i] +
//       " - Score: " +
//       studentScores[i] +
//       ", Percentage: " +
//       percentage.toFixed(2) +
//       "%"
//   );
// }
