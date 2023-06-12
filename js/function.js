let student1 = {
  index: 0,
  name: "ram",
  phone: 1111,
  country: "usa"
}

let student2 = {
  index: 1,
  name: "Hari",
  phone: 222,
  country: "uk"
}
let student3={
  index: 3,
  name: "Shyam",
  phone: 333,
  country: "Nepal"
};
/* console.log(`${student1.name}'s phone is ${student1.phone}`);
console.log(`${student2.name}'s phone is ${student2.phone}`);
console.log(`${student3.name}'s phone is ${student3.phone}`); */

function call(student){
  console.log(`Name:${student.name}`),
  console.log(`phoneNo:${student.phone}`),
  console.log(`country:${student.country}`)
}
call(student1);

/* function phoneNo(student){
  console.log(`${student.name}'s phone is ${student.phone}`);
};
phoneNo(student1);
phoneNo(student3); */


function greethim(greeting,name){//let greeting=namaste
  console.log(greeting,name)
};
greethim("hello","raj");


let person1="ram";
let person2="hari";
console.log("Namaste",person1,"","Namaste",person2);//repeating too much
function greetPeople(greeting){//here greeting is parameter
  console.log(greeting,person1,"",greeting,person2);
}
greetPeople("Lasho");//lasho is arguement