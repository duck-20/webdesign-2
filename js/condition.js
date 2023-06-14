/*  condition */
/* syntax:
      if(<condition>){
        do true task;
      }
      else{
        do something else;
      }


      if(<condition>){
        do true task;
      }
      else{
        if{
          do something else;
        }
        else{
        do something else;
      }
    }
*/
let willRain = false;
let hasProbability = true;
if (willRain == true) {
  console.log("Take umbrella");
} else {
  if (hasProbability) {
    console.log("you may take it");
  } else {
    console.log("Dont take umbrella");
  }
}

if (true) {
  console.log("true case");
} else {
  console.log("false case");
}
console.log("_______________________");

let minAge = 18;
let herAge = 18;
let hasConsent = false;

if (minAge >= herAge) {
  if (hasConsent) {
    console.log("Can marry");
  } else {
    console.log("can't");
  }
} else {
  console.log("can't marry");
}
console.log("_______________________");

if (willRain) {
  console("take umbrella");
} else if (hasProbability) {
  console.log("You may take the umbrella");
} else {
  console.log("No need");
}
console.log("_______________________");
/* Ternary operator */
/* Falsy Value */

/* Logical Operator
      -AND &&
          Both values should be true. if either one of them is false gives false output.
      -OR ||
          If either one of the value is true ,the output is true.
      -NOT !
          Generates the opposite of the value,if value is true output is false and vice versa.

*/

if(minAge>=herAge && hasConsent)(
  console.log("She can marry.")
)
else{
  console.log("can't")
}
console.log("_______________________");

let todos=[
  {
    "id":1,
    "todo":"html",
    "completed":true,
  },
  {
    "id":3,
    "todo":"CSS",
    "completed":true,
  },
  {
    "id":3,
    "todo":"Js",
    "completed":false,
  }
]
if(todos[0].completed){
  console.log("html is completed");
}
else{
  console.log("not completed");
}
if(todos[1].completed){
  console.log("css is completed");
}
else{
  console.log("not completed");
}
if(todos[2].completed){
  console.log("js is completed");
}
else{
  console.log("not completed");
};
console.log("_______________________");

function call(i){
  if(todos[i].completed)
  console.log(`${todos[i].todo}  is completed`)

else{
  console.log(`${todos[i].todo} is pending`)
}
};
call(0);
call(1);

