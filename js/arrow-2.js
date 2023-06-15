let db_users = [];
let hashPassword = (password) => password + Date.now();

let signUp = (name, email, password) => {
  console.log("Added to database");
  db_users.push({
    Name: name,
    Email: email,
    Password: hashPassword(password),
  });
};
signUp("Ayush", "ayush@r", "1234");
signUp("Ayush", "ayush@r", "123123");
signUp("Ayush", "ayush@r", "123123");
console.log(db_users);

/* To push data in server */
console.log("__________________");
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

console.log("__________________");
let sum = (a, b) => {
  console.log(a + b);
};

sum(1, 2);
console.log("__________________");

/* Arrow Function
in arrow function,we dont need return cause arrow itself is return
for e.g:
let sum=(a,b)=>a+b;

syntax
    -let <function_name>=()=>{
      do something
    }
*/

let mul = (x, y) => x * y;
console.log(mul(5, 5));
console.log("__________________");

/* Hoisting */
deleteUser();

function deleteUser() {
  console.log("User deleted");
}
console.log("__________________");
/* let name = "Ram";
console.log(name);
 */