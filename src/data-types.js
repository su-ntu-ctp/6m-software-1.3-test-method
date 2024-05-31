//data types
const num = 1;
console.log("num",typeof num);

const str = "1";
console.log("str",typeof str);

const bool = true;
console.log("bool",typeof bool);

let x;
console.log("x",typeof x);

const y = null;
console.log("y",typeof y);

const obj = {};
console.log("obj",typeof obj);

const arr = [];
console.log("arr",typeof arr);

//control structures:
let number = 10;
if (number % 2 ==0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

let testnum1 = 0;
while (testnum1 < 5){
  console.log(testnum1);
  testnum1++;
}

let testnum2 = 5; 
do {
  console.log(testnum2)
  testnum2--;
} while (testnum2 >= 0)
  
