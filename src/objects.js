// Declaring an empty object
let empty = {};

// Initializing object with default value
const person = {
    name:"John Doe",
    yearOfBirth: 1987
}
console.log("person", person);

// Retrieve the value of "yearOfBirth" property
console.log("I am born in", person.yearOfBirth);

// Looping an object
for(let key in person){
    console.log("key is", key, "and value is", person[key]);
}

/*Class discussion
Break out into groups and discussion what are the following:
    1. Object Destructuring
    2. Template Literals 
Provide examples for each.
*/

/*
Exercise:
1. Create an object called "school" with the following fields (values are up to the learner): 
    a. Name - String
    b. yearEstablished - Number
    c. isActive - Boolean
    d. coursesOffered - Array containing 3 Strings
2. Print in the console the following sentence using the "school object" - "Welcome to <name> and we offer <coursesOffered>
*/
