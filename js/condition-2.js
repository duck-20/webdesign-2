let todos = [
  {
    id: 1,
    todo: "html",
    completed: true,
  },
  {
    id: 2,
    todo: "CSS",
    completed: true,
  },
  {
    id: 3,
    todo: "Js",
    completed: false,
  },
  {
    id: 4,
    todo: "React",
    completed: false,
  },
  {
    id: 5,
    todo: "Node",
    completed: false,
  },
];

function call(i) {
  todos[i].completed
    ? console.log(`${todos[i].todo} is completed.`)
    : console.log(`${todos[i].todo} is Pending.`);
};
for(i=0;i<=4;i++){
  call(i);
}

/* Ternary Operator  ? */
