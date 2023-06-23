/* ForEach only 
      only for array    
*/


let db_users = [
  { name: "Aarav", email: "aarav@gmail.com", password: "aarav0" },
  { name: "Aarya", email: "aarya@gmail.com", password: "aarya1" },
  { name: "Aasha", email: "aasha@gmail.com", password: "aasha2" },
  { name: "Urmila", email: "urmila@gmail.com", password: "urmila37" },
  { name: "Yogesh", email: "yogesh@gmail.com", password: "yogesh38" },
];

let loginUser = (email, pw) => {
  /* Check if it matches... */
  let matched = false;
/* 
  for (i = 0; i < db_users.length; i++) {
    let user = db_users[i];
    /* console.log(user); */

 /*  } */ 

  db_users.forEach(user=>{    if (user.email == email && user.password == pw) {
    matched = true;}
  })

  if (matched) {
    console.log("Login success");
  } else {
    console.log("invalid");
  }
  return matched;
};
// loginUser("yogesh@gmail.com","yogesh38")
const result=loginUser("yogesh@gmail.com","yogesh38");
console.log(result)


let fruits = ["Apple", "Orange", "Kiwi"];
/* for(let index=0;index<fruits.length;index++){
  console.log(`In index ${index} we have ${fruits[index]}`);
} */
/* Array Functions
      -foreach
*/
function printInfo(element, index) {
  console.log(element, index);
  return undefined;
}

fruits[3]="banana";
fruits.push("mango");
fruits.unshift("Pear");
fruits.pop();
fruits.shift();
fruits.splice(2,2,"Pineapple");//deletes/insert data from middle of the array
/* fruits.forEach(printInfo) */ 
/* fruits.forEach((fruit,index) =>
  console.log(fruit,index)
); */

console.log(fruits)


