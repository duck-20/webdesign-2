/* wap to calculate sum of two nummbrs
1,2
2,2
2,3
3,3
3,10
the sum of 1 and 2 is 3
*/

let a=1;
let b=2;
console.log(`the sum of ${a} and ${b} ${a+b}`);
console.log(`Sum= ${1+2+3}`);//template literal
console.log(`sum= ${10+10}`);

function add(num1,num2){ //num1=3,num2=4;
  console.log(`The sum of ${num1} and ${num2} is ${num1+num2}.`)  
};
//execute the function or calling the function
add(10,10);
add(3,5);

/* shift + alt + A for block comment */

/* 
syntax:
function <functionName>(){
  do some task
}

*/

/* function sum(){
  console.log("1+2=",1+2);
};
sum();
sum() */

function sub(num1,num2){
  console.log(`The sub of ${num1} and ${num2} is ${num1-num2}`);
}
sub(9,3);
sub(999,291);
function multiply(num1,num2){
  console.log(`The mul of ${num1} and ${num2} is ${num1*num2}`);
}
multiply(2,3);

