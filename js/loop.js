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

let age=20;
console.log("age",age++);//change hunxa taraa dila dekinxa
++age;
console.log(++age)//directly chaange garxa
console.log(age);

//for loop

//wap to print 0 to 10;
  for(i=0;i<=10;i++){
    console.log(i);
  }
