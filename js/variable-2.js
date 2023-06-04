/* Variables */
/* Data types
    Primitive Datatypes
      strings-text
      number
        - int
        - float/double/decimal
      Boolean
        true/false
      Undefined //in js only
      null

    Non-primitive(collection datatypes/reference)
        -array

*/

let brand = "apple";
let color; //variable declartion
color = "red"; //variable initialization

let age = 20;
let price = 1000.5;

let isPaid = true;
let isMarried = false;

console.log(brand);
console.log(color);
console.log("Hello world");
console.log(price);

//color
console.log("prev-color", color);
color = "white";
console.log("After-color", color);
color = "blue";
console.log("Final color", color);

//constant
const PI = 3.14;
// PI=3.1456;
console.log(PI);

//var vs let vs const

var name = "ayush";
//can be initialized using var again and again
var name = "ayush";

let surname = "pakhrin";
//cannot redeclare using let variable like var
surname = "pakhrin";

console.log(name);
console.log(surname);
console.log("Name is " + name + surname);

/* 
    let str
    let arr
    let obj
*/

//undefined
let watchPrice;
console.log("Before", watchPrice);
watchPrice = 1000;
console.log("After", watchPrice);

//null
let data = null; //when we have to define things as empty explicit
console.log(data);

let name1 = "abc";
let name2 = "ac";
let name3 = "a";
//let names="abc","cde";
//let names="abc,cde";//not a right way

/* 
  Array
      -collection of different values;
  syntax
  let <variable_name>
*/
let names = ["ABC", "BCD", "XYZ"];
let brands = ["Apple", "Samsung"];
let brandsPrice = [1000, 500];
let boolin = [true, false];
//printin array
console.log("Names", names);
console.log("Brands", brands);
console.log("Prices", brandsPrice);
//printin single string from array
console.log("single-name", names[0]);
console.log("Brand-Name", brands[1]);
console.log("Price", brandsPrice[1]);

//array can hold all datatypes of js
let arr = ["string", 10, true, undefined, null];

let projectorPrice = 5000;
let projectorColor = "Black";
let projectorBrand = "apple";
let projectorDate = "2023/2/22";
//console.log(projectorDate);

//let projectors=[5000,"Black","apple","2023/2/22"]; wrong way to define data as array is the collection of similar data.
//console.log(projectors);


/* 
OBJECT
    let <object_name>={
      <key>:<value>,
      <key>:<value>,
      <key>:<value>,
    }
*/
let projector={
  sellingPrice:5000,
  costPrice:4000,
  color:"Black",
  brand:"Apple",
}
console.log(projector);