/*
//number
 let age1=10;
let age2=age1; //age2=10
age2=20;
console.log(age1);
console.log(age2);

//string
let fruit1="Apple";
let fruit2=fruit1;
fruit2="orange"

console.log(fruit1)
console.log(fruit2) */

//array and obj are called reference datatypes;they are like pointers
let person1 = {
  name: "ram",
  dob: "1998",
  address: "KTM",
};
let person2 = person1; //here person2 doesnt have the copy of person1 values,rather person2 is pointing to the location of person1.
person2.name = "Jari";
/* Spread opertor syntax: {...} . it is also called rest operator*/
let person3 = { ...person1 }; //spread operator creates new empty objecyt and allows us to copy the values of obj or array.
person3.name = "Shyam";
console.log(person1);
console.log(person2);
console.log(person3);

/* calculator:TODOS calculate the sum of 1,2,4,5,6,6,8,1000*/
function calculate(a, b, ...z) {
console.log(a);
console.log(b);
console.log(z);
total=z.forEach(el=>{
x=el;
x+=el;
return x;
})
console.log(total);

}
calculate(1, 2, 4, 4, 7, 7, 5, 9);

/* Map */
let ages = [10, 20];
let agesStr = ["Age is 10", "Age is 20"];

agesStr = ages.map((age) => {
  return "Age is " + age;
});
console.log(agesStr);


let evenNumber=[2,4,6,8,10];
let number=[];
number=evenNumber.map((el)=>{
  return "Even no. is" + el;
})
console.log(number)
