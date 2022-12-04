const num1 = 10;
const num2 = 20;

const num3 = num1 + num2;

console.log(num3);

// All strings return True boolean value
// Empty strings return False boolean value

// for and foreach loops are like the same
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
array.forEach(element => {
    
});

// To access all elements in an object without printing category names
const person = {
    name: "John Doe",
    yearOfBirth: 1987,
    pet: "dog"
}

// These two are essentially equivalent
console.log(person.yearOfBirth);
console.log(person["yearOfBirth"]);

for (let key in person) {
    console.log("key = ", key, "value = ", person[key]);
}