// so to print any statement we use console.log("")
// console.log("Hello from main.js");
// console.log("hiiiiiiiii! this side kritika");
// console.log("ummmmmm sooo how was the day");

// //variables -->first way
// let age = 25;
// console.log(age);

// //-->second way-:we can't change the value of salary when it once intitalized
// const salary = 3400000;
// console.log(salary);

// //Strings
// const name = "Kritika";
// const language = "JavaScript";
// //float
// const pi = 3.14;
// //boolean
// const newuser = false;
// //undefined
// let result;
// console.log(result);
// const res = undefined;
// console.log(res);

// //null
// const data = null;
// console.log(data);

// //objects
// const person = {
//   firstname: "Bruce",
//   lastname: "wayne",
//   age: 30,
// };
// console.log(person.firstname);

// const oddnumber = [1, 2, 3, 4, 5, 6];
// console.log(oddnumber[5]);

//assignent operator
let x = 10;
//arithmetic operator
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(++x);
console.log(--y);
//comparision operator
console.log(x == y); //-->it will check for the values of x and y
console.log(x != y); //-->it will also check that x is not equal to y
console.log(x === y); //--> this will check for the valuees as well as for the datatype of x and y
console.log(x >= y);
console.log(x <= y);

//logical operators
//&&--> and operator
//|| --> or operator
//!==> not operator
const isValidNumber = x > 8 && 8 > y;
console.log(isValidNumber);

//String operators
console.log("Bruce " + "wayne");

//ternary operator
const isEven = 10 % 2 == 0 ? true : false;
console.log(isEven);

//implict conersion
console.log(2 + "33");
console.log(true + "44");
console.log("4" - "2");
console.log("5" * "10");

//explict conversion
console.log(Number("45352")); //--> this will convert any numeric string into integer or number
console.log(parseInt("3434")); //-->this will also convert into any number

console.log(String(500)); //--> this will convert any numeric and boolean to string
console.log((300).toString()); //-->same as above

console.log(Boolean(10)); //convert any number in boolen
//null underdefined 0 gives NaN

//conditional statement

const num = 0;

if (num > 0) {
  console.log("The number is positive");
} else if (num === 0) {
  console.log("the number is zero");
} else {
  console.log("The number is negative");
}

const color = "r";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("coro is blue");
    break;
  default:
    console.log("not valid");
}

///loops
for (let i = 0; i <= 50; i++) {
  console.log(i);
}
let k = 0;
while (k < 34) {
  console.log(k);
  k++;
}
let o = 3;
do {
  console.log(o);
  o--;
} while (o > 1);

//-->for of loop
const numArr = [1, 2, 3, 54, 54];
for (const num of numArr) {
  console.log(num);
}

//functions
function greet(m) {
  console.log("Good morning " + m);
}
greet("kritika");

function add(a, b) {
  return a + b;
}
const sum = add(3, 4);
console.log(sum);

//alternate syntax
const arrowSum = (a,b)=>{
return a+b
}
console.log(arrowSum(34,4))

