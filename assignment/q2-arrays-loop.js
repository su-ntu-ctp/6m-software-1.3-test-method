/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/
const studentList = [
  "Johnson",
  "Christina",
  "Michael",
  "Lina",
  "Larry",
  "Michelle",
  "Bob",
  "Wilson",
];

function printStudentNames() {
  // Iterate through the array `studentList`.
  for (let Index = 0; Index < studentList.length; Index++) {
    // Print each student's name inside the loop using console.log().
    console.log(studentList[Index]);
  }
}

printStudentNames();

// Ignore the code below this line.
module.exports = {
  studentList,
  printStudentNames,
};
