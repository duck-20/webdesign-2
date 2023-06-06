/* object
      syntax:
        let <object_name>={
          key/property/attribute:<value>,
          key/property/attribute:<value>,
          key/property/attribute:<value>,
        }


*/

/* Task:create ab object of your room */
/* Color,windowcount,dimension */
//single room
let room = {
  door: 1,
  color: "Yellow",
  window: 4,
  dimension: {
    length: 100,
    width: 100,
    height: 20,
    unit: "m",
  },
};
console.log(room);

//multiple rooms
/* let rooms={
  roomA:{
    door: 1,
    color: "Yellow",
    window: 4,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit:"m",
    },
  },
  roomB:{
    door: 2,
    color: "Red",
    window: 4,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit:"m",
    },
  },
  roomC:{
    door: 3,
    color: "Blue",
    window: 4,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit:"m",
    }
  }

}
console.log(rooms); */

let rooms = [
  {
    color: "green",
    window: 4,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
  {
    color: "blue",
    window: 2,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
  {
    color: "brown",
    window: 6,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
];
console.log(rooms);

//task-2

let courses = [
  {
    Subject: "Web",
    startTime: "2PM",
    endTime: "3PM",
    cost: 15000,
    teacher: {
      tname: "xyz",
      phoneNo: 9813493440,
      address: "boudha",
    },
  },
  {
    Subject: "MERN",
    startTime: "2PM",
    endTime: "3PM",
    cost: 15000,
    teacher: {
      tname: "xyz",
      phoneNo: 9813493440,
      address: "boudha",
    },
  },
  {
    Subject: "Python",
    startTime: "2PM",
    endTime: "3PM",
    cost: 15000,
    teacher: {
      tname: "xyz",
      phoneNo: 9813493440,
      address: "boudha",
    },
  },
];
console.log(courses);

//Obj vs array
/* obj single ko lagi 
array multiple ko lagi for eg:
single info ko lagi hami obj use garxam vane 
singleroom:
let room = {
  door: 1,
  color: "Yellow",
  window: 4,
  dimension: {
    length: 100,
    width: 100,
    height: 20,
    unit: "m",
  },
};
console.log(room);
multiple ko lagi array:
let rooms = [
  {
    color: "green",
    window: 4,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
  {
    color: "blue",
    window: 2,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
  {
    color: "brown",
    window: 6,
    dimension: {
      length: 100,
      width: 100,
      height: 20,
      unit: "m",
    },
  },
];
console.log(rooms);


*/
let teacher1={
  tid:9,
  name:"lataram",
  subject:"sabai",
  salary:100000,

}

let teachers = [
  {teacher1},
  { tid: 1, name: "Ram", subject: "maths", salary: 15000 },
  { tid: 2, name: "Lam", subject: "English", salary: 15000 },
  { tid: 3, name: "Sam", subject: "Nepali", salary: 15000 },
  { tid: 4, name: "Ram", subject: "Science", salary: 15000 },
];
console.log(teachers);
console.log(teacher1.name+"'s salary is"+" "+teacher1.salary);

let firstName="Ram";
let lastName="Sharma";

//his name is ram sharma.
console.log("His Name is "+firstName+" "+lastName)
//also
let fullName=firstName+" "+lastName;
console.log(fullName);


//task-3
let room1 = {
  color: "green",
  doorCount: 2,
  dimensions: {
      length: {
          value: 10,
          unit: "meter"
      },
      width: {
          value: 100,
          unit: "feet"
      },
      height: {
          value: 100,
          unit: "feet"
      },
  }
}
console.log("Room1's length is "+room1.dimensions.length.value+" "+room1.dimensions.length.unit);
console.log("Room1's length increased by 10="+room1.dimensions.length.value+10);



//research on template literals

console.log(`The length of room1 is ${room1.dimensions.length.value} ${room1.dimensions.length.unit}.`);