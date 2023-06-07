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
//updating value of 0th and 2nd name index;
students[0].name = "Ram Bahadur";
students[2].name = "Ram Sharma";
console.log("After :", students);
//adding a new index for array;

students[3] = {
  name: "shyam",
  phone: 4444,
};
console.log(students[3]);
console.log(students);


//using for loop:
for (i = 0; i <= 3; i++) {
  console.log(`${students[i].name}'s phone number is ${students[i].phone}.`);
};
//Donot repeat youself

/* Function */
/* Arrow Function */
