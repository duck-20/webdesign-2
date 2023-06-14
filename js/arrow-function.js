/* function <function-name>(<parameter),<parameter>,...,<parameter>){
      do something;
}
function-name(x,y,...,z);
*/

/* function sum(x, y) {
  console.log(x + y);
}
sum(1, 2); */

/* Arrow function
    fat-arrow function: 
        syntax:
        let <function_name>=(<parameter>,<parameter>)=>{
          do something
        }
        functionName(parameter,parameter)
*/

let sum = (x, y) => {
  console.log(x + y);
};
sum(10, 10);
sum(100, 90);


console.log("_________________________");

let even = (x, y) => {
  for (x; x <= y; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
};
even(1, 10);
