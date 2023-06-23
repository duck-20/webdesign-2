/* console.log(1);
console.log(323);
console.log(11);
console.log(2);


function callback(){
  console.log("called back");
}
setTimeout(callback,3000)

setTimeout(()=>{
  console.log("called back");
},3000);  */
//asynchronous ackground ma run hunxa

/* promise */
/* let promise1= new promise() *///class in oop
/* oop object oriented programming 
      class-Blueprint of an object
      js is also oop but not strict like other languages
*/
/* let vehicle1={
  name:"BMW",
  drive:()=>{
      console.log("Driving");
  }
}
let vehicle2={
  name:"TEsla",
  drive:()=>{
      console.log("Driving");
  }
}

vehicle1.drive();
vehicle2.drive();


class vehicle{
  constructor(name){
      this.name=name
  }
  drive(){
    console.log("Driving");
  }
}
 let vehicle3= new vehicle("Lambo");
 let vehicle4= new vehicle("ferari");
 vehicle3.drive();
 console.log(vehicle3);
 console.log(vehicle4);
 vehicle4.drive();

 /* Promise
        stages
            -pending;
            -resolve;
            -reject;
    */  

 try{         
 let promise1= new Promise((resolve,reject)=>{
         
  setTimeout(() => {
    resolve(
      console.log("Completedf")
    )
  }, 2000);
 
 });
 console.log(promise1);}
 catch(error){
  console.log(error.message);
 }

 console.log(1)
 console.log(1)
 console.log(1)
 console.log(1)

 promise1.then((response) => {
  console.log(response)
 }).catch((err) => {
  console.log(err.message)
 });