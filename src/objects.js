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