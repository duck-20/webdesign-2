let arr = [2, 4, 10, 20];

let doubleArray = [];

/* code here */
/* 
  loop for each and every elemnt of our original array
  in each and every loop push double value in double array.
*/
/* for(i=0;i<arr.length;i++){
  doubleArray.push(
    arr[i]*2
  )
} */
/* arr.forEach((el)=>{//here el stores the value of the index
  doubleArray.push(
    el*2
  )
}) */

/* Array.map function
      returns new array with exact same length
*/
doubleArray = arr.map((num) => {
  return num * 2;
});


/* evennumber using foreach */
console.log(doubleArray); //[4,8,20,40];
let numbers = [2, 3, 4, 5, 6, 10];
let evenNumber = [];

numbers.forEach((el) => {
  if (el % 2 == 0) {
    evenNumber.push(el);
  }
});
console.log(evenNumber);

/* using filter */
evenNumber=numbers.filter(number=>number%2==0)
console.log(evenNumber);


