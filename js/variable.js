console.log("Hello world!");
/*  console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
*/
/* comment 
mainly used for describing codes.
     ctrl + / line comment;
     alt + shift+ a block comment
*/
/* 
varaiables/container/box
-words that can store certain value
  js syntax:
      name="ram";
*/

greetings = "Namaste";
name = "Ram";
age = 20;
console.log(greetings, name);
console.log(name, age);
brand = "apple";
console.log(brand);
fullName = "john mayer";
console.log(fullName);

/* we cant make variable using keywords(reserved keywords).
for eg:
for="wwe"
const="caon" */

courseName = "Mern"; //Camel casing
course_duration = 3; //Snake_case

// 1="one"; error we cant use int to define a varible
number_1 = "one"; //use variable in this way using either camel or snake case;

console.log(number_1);

isPaid = true;
isMarried = false;

/* 
      Data_types:
      1.String-text
      2.Number
          -int
          -double/float
      3.Boolean(true or false)

*/

/* 
  To declare the variable,use keywords first:
      -var(global dont use it..)
      -const(fixed and unchangeable)
      -let(local,changeable and most preferred); 
*/

var laptopBrand = "acer";
console.log("Laptop brand is", laptopBrand);

let laptopColor = "black";
console.log("Laptop color is", laptopColor);

const PI = 3.14;
console.log("The value of PI is", PI);

//Declaration vs initaiization
let mobileBrand; //declaration
mobileBrand = "Apple"; //initialization
mobileBrand = "Samsung"; //re-initialization(overwrite concept)
console.log(mobileBrand);

let watchBrand; //declaration
watchBrand = "Casio"; //initailization
watchBrand = "rado"; //re-initailization
console.log(watchBrand);

let color = "black"; //declaration and initialization

const earthRotation = "east to west"; //declaration and intialization
// earthRotation="west to east";//cant reinitialize when using cont variable
console.log(earthRotation);

/* let vs var
we can modify the variable multiple time in var i.e can be reinitialized multiple times
we can only modify the variable once in let i.e can only be reinitialized once
*/
