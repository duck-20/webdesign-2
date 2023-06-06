/* 
  Array
    syntax:
    let <var_name>=[ <element>,<element>,<element>];
    let <var_name>=[ <oth index>,<1st index>,<2nd index>];


    INDEX
      -always starts with zero(0)
  */

let fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[2]);
console.log(`my fav fruit is ${fruits[2]}`);
console.log("0th index", fruits[0]);
console.log("1th index", fruits[1]);
console.log("before", fruits[2]);
fruits[2] = "Kiwi";
console.log("after", fruits[2]);
console.log("Before adding 3rd index");
console.log(`In 3rd index:${fruits[3]}`);
console.log("After adding 3rd index");
fruits[3] = "papaya";
console.log("In 3rd index :", fruits[3]);
/* let teal={
  color:"teal",
  hexValue:"#wwwww",
  hexValue:"#wwwww",
  hexValue:"#wwwww23",
  } */
let colors = [
  {
    color: "white",
    hexValue: "#000000",
  },
  {
    color: "red",
    hexValue: "#FFA500",
  },
  {
    color: "teal",
    hexValue: "#008080",
  },
];
console.log(colors[2]);
colors[0].hexValue = "#FFFFFF";
console.log("The hexValue of White is ", colors[0].hexValue);
//Adding RGB in white color
colors[0].rgb = "rgb(255,255,255)";
colors[1].rgb = "rgb(23,251,225)";
colors[2].rgb = "rgb(255,22,235)";
console.log(colors[0]);
//adding 3rd index
colors[3]={
  color:"Purple",
  hexValue:"#FAFA",
  rgb:"rgb(123,13,235)"
}
console.log(colors);

//template literal
console.log(`hexaValue: ${colors[2].hexValue}`);
console.log(
  `the hex values of red is ${colors[1].hexValue},white is ${colors[0].hexValue}`
);
console.log(`HexValue of ${colors[1].color} is ${colors[1].hexValue}.`);

let person = {
  name: "Ram",
};
console.log(person);
person.phoneNo = 98134;
//after adding phone no.
console.log(person);


console.log(`Phone number of ${person.name} is ${person.phoneNo}.`)