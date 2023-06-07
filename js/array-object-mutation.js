/* variables
      let <variable_name>=<vlue>;
    
*/
let color = "white";

/* Datatypes
        -string/text
        -number
        -boolean
        -undefined
        -null
  */
let watchPrice; //only declared but not initialized
/* array
      -collection of different values
      -usually it is collection of similar datatypes.
  */

//let students=["ram","shyam"];//simple array of string

let student1 = {
  name: "ram",
  phone: 1111,
};
let student2 = {
  name: "shyam",
  phone: 2222,
};
let students_1Method = [student1, student2];
console.log(students_1Method);
let students_2Method = [
  {
    name: "ram",
    phone: 1111,
  },
  {
    name: "Shyam",
    phone: 1111,
  },
];
console.log(students_2Method);
//TO DO task
let students = [
  {
    name: "ram",
    phone: 1111,
  },
  {
    name: "Hari",
    phone: 222,
  },
  {
    name: "ram",
    phone: 333,
  },
];
console.log("before: ", students);
students[0].name = "Ram Bahadur";
students[2].name = "Ram Sharma";
console.log("After :", students);

students[3] = {
  name: "shyam",
  phone: 4444,
};
console.log(students[3]);
console.log(students);

//
let person = {
  name: "John Doe",
  country: "USA",
  phone: 111,
};
let person2 = {
  name: "Mary Jane",
  country: "UK",
  phone: 111,
};
//before
console.log(person2);
// person2="mary me";
// console.log(person2)//this will replace whole object into string.
person2.phone = 3333;
//after
console.log(person2);
person2.isMarried = true;
console.log(person2);

//browsers=[0th,1st,2nd]
let browsers = ["chrome", "firefox", "ms-word"];
console.log("Before:",browsers);
browsers[2] = "ms-edge";
console.log("After: ",browsers);
//added new browser
browsers[3]="brave";
console.log(browsers);

//navako index call garnu khoje vane undefined dekaunxa

