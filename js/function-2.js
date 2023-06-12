/* 
  Function
      syntax:
        funtion <function_name> (){
            block
        }

*/
//calculateDiff
// console.log("10-2=",10-2);

//Making Function
/* function diffAndDouble(num1, num2) {
  console.log(`num1=${num1}`);
  console.log(`num2=${num2}`);
  console.log(`${num1}-${num2}*2=${(num1 - num2) * 2}`);
  console.log("\n"); 
} */
//Call function by calling function names only.
/* diffAndDouble(10, 2);
diffAndDouble(10, 6);
diffAndDouble(299, 189);
diffAndDouble(9, 6); */

//diff and multiply
/* function diffAndMul(num1, num2, num3) {
  console.log(`num1=${num1}`);
  console.log(`num2=${num2}`);
  console.log(`num2=${num2}`);
  console.log(`${num1}-${num2}*${num3}=${(num1 - num2) * num3}`);
  console.log("\n");
}
diffAndMul(10, 6, 3); //here 10,6,3 are arguements;
diffAndMul(10, 5, 2); */ //here 10,6,3 are arguements;

/* //TODO :spread operator
function sum(num1,num2,num3,num4,num5){
  let value=[num1,num2,num3]
} */

/* 
1. Create a function name signupuser
2. Create two parameter name and email
3. after retriving name and email create a new user object with name and email keys.  
4.add this new user object to old db_user;
*/
let dbUsers=[]
function signUp(name, email) {
  console.log("add user to db_users");
  let user={
    "name":name,
    "email":email,
  }
  //dbUsers[dbUsers.length]=user;
  dbUsers.push(user);
}

signUp("ram","ram@ga.com")//[{name:ram ....}] already full
signUp("hari","hari.com")
signUp("hari2","hari123.com")
signUp("shyam","gerosdas")
console.log(dbUsers)


/* Sign-Up */

/* 
    db_users=[
      {
        name:"Ram",
        E-mail:"ram@ram.com"
      },
      {
        name:"Ram",
        E-mail:"ram@ram.com"
      },
    ]
*/
