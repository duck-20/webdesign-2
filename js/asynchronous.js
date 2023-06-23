/* 
synchronous vs asynchronous
    sync
      -code runs line by line
    
    async
      -code runs in background
      -donot block remaining codes

*/


console.log(1);
console.log(2);
console.log(3);
console.log(4);

function doTaskOne(){
  console.log("Task one");
  for(i=0;i<10;i++){
    console.log("index",i)
  }
  doTaskTwo()
}


const doTaskTwo=()=>{
console.log("Task two");
}
console.log("before function")
doTaskOne();


function showPop(){
  console.log("Show Popup");
  return undefined;
}
// setTimeout(showPop,1000);

setTimeout(() => { //here the arrow function is called anonymous function
  console.log("Show Popup using arrow function")
}, 3000);

