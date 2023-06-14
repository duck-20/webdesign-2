/* 
loop
  -doing same task again and again for certain number of times
      -for loop:
        -when we know exact number of iteration
      -while loop:
        -when we don't know exact number of iteration
        but we know the condition
      -do while loop:
        
*/

/* 
  Operator
      Arthematic operator: +,-,*,/,%;
      %: modulous//returns remainder;

  Assignment operator:
    =  //assign value

  increment/decrement operator:
    -post increment <var>++;
    -pre increment --<var>
    for e.g:
      let num=2;
      num=num++;//3
      num=--num;//1

  Comparison Operator:
    >,<,>=,<=,==;

  equality operator:
  ==
  ===//strict equality,checks datatypes;
  for e.g:
  1==1;true
  "1"==1;true
  "1"===1;false
*/

/* let age=20;
console.log("age",age++);//change hunxa taraa dila dekinxa
++age;
console.log(++age)//directly chaange garxa
console.log(age); */

//for loop
/* Syntax
      for(<initial value;<condition>;modifier/incrementor){
        do task;
      }

*/




//wap to print 0 to 10;
for (i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("____________________________________");
console.log("Start Loop")
for (let count = 0; count <= 3; count++) {
  console.log(count);
  console.log("\n");
}
console.log("End loop")
console.log("____________________________________");


/* Multiple using loops */

function mult(tableOf, numFrom, numTo) {
  let x = tableOf;
  let y = numFrom;
  let z = numTo;
  console.log(`Table of ${x} \n`);

  for (i = y; i <= z; i++) {
    console.log(`${x}*${i}=${x * i}`);
    console.log("\n");
  }
}
mult(1, 0, 5);
console.log("____________________________________");
mult(5, 1, 5);
console.log("____________________________________");
mult(10, 1, 10);
console.log("____________________________________");

//Even no. upto nth

function even(num1, num2) {
  console.log(`The even number between ${num1} and ${num2} are: \n`)
  for (i = num1; i <= num2; i++) {
      if(i%2==0){
          console.log(i);
      }

  }
}
even(1,9);
