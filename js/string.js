/* String
    template literals:
      i.back tick(`)
        -on the left of 1 and below esc button
      ii.uses $ sign with the combination of {}.
          for e.g:
              console.log(`hello ${user}!`);



*/




let person = {
  name: "Ram",
  phoneNo: 98134,
};

console.log("Phone number of "+person.name +"is "+person.phoneNo)

console.log("this is string");

console.log(`Phone number of ${person.name} is ${person.phoneNo}.`);

let courses=["web","mern"];
console.log(`Before ${courses}`);
courses[1]="MERN Stack";
console.log(`After ${courses}`);
