const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
let booksObj = {};

function convert(keyArr, valueArr) {
  let obj = {};

  for (let i = 0; i < keyArr.length; i++) {
    obj[keyArr[i]] = valueArr[i];
  }

  return obj;
}

function printByKey(key) {
  console.log(booksObj[key]);
}

booksObj = convert(bookIdArr, bookTitle);
printByKey("NLB2"); // prints "Programming for Dummies"
