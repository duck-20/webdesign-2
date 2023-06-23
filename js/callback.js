/*  callback
         a function passed as arguement to another function
      -call me back;
*/

function doTaskOne(a){
    console.log("Task one");
    for(i=0;i<10;i++){
      console.log("index",i)
    }
    a()
}

const doTaskTwo=()=>{
  console.log("Task two");
}
doTaskOne(doTaskTwo);