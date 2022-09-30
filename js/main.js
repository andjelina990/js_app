let todos = JSON.parse(myPlanner);
console.log(myPlanner);

for (let todo of todos) {
  document.getElementById('demo').innerHTML += `


      <div class="card" style="width: 18rem;">
      <div class="d-inline-block bg-info w-25 m-3 text-center">Task</div>


       <img src=images/${todo.image} class="card-img-top p-3" alt="...">
  <div class="card-body">
    <h5 class="card-title">${todo.taskName}</h5>
    <p class="card-text">${todo.description}</p>
  </div>
  <ul class="list-group list-group-flush">
   <div>
   <li class="list-group-item text-center">Priority Level:



   <button class="important">${todo.importance}</button>

   <input type="submit" value="Increase" class="important-btn">

   </li>

   </div>
    <li class="list-group-item">Deadline: ${todo.deadline}</li>
  </ul>
  <div class="card-body">


  <input type="submit" value="Done" class="done-btn">

  </div>
</div>
  `;
}

let btn = document.getElementsByClassName('important');

let btns = document.getElementsByClassName('important-btn');

function important(index) {
  todos[index].importance++;

  document.getElementsByClassName('important')[index].innerHTML =
    todos[index].importance;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    important(i); // register(0);  register(1)
  });
}

// for (let i = 0; i < btn.length; i++) {
//   if (i === 2) {
//     btn[i].style.backgroundColor = 'green';
//   } else {
//     btn[i].style.backgroundColor = 'red';
//   }
// }
