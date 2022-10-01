// let todos = JSON.parse(myPlanner);
// console.log(myPlanner);

// for (let todo of todos) {
//   document.getElementById('demo').innerHTML += `

//       <div class="card" style="width: 18rem;">
//       <div class="d-inline-block bg-info w-25 m-3 text-center">Task</div>

//        <img src=images/${todo.image} class="card-img-top p-3" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${todo.taskName}</h5>
//     <p class="card-text">${todo.description}</p>
//   </div>
//   <ul class="list-group list-group-flush">
//    <div>
//    <li class="list-group-item text-center">Priority Level:

//    <button class="important">${todo.importance}</button>

//    <input type="submit" value="Increase" class="important-btn">

//    </li>

//    </div>
//     <li class="list-group-item">Deadline: ${todo.deadline}</li>
//   </ul>
//   <div class="card-body">

//   <input type="submit" value="Done" class="done-btn">

//   </div>
// </div>
//   `;
// }

// let btn = document.getElementsByClassName('important');

// let btns = document.getElementsByClassName('important-btn');

// function important(index) {
//   todos[index].importance++;

//   document.getElementsByClassName('important')[index].innerHTML =
//     todos[index].importance;
// }

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     important(i); // register(0);  register(1)
//   });
// }

let todos = JSON.parse(myPlanner);
console.log(todos);
renderTasks();

let btnPriorityLevel = document.querySelectorAll('.important');
let btnIncreaseLevel = document.querySelectorAll('.important-btn');

addClickListener();

function important(index) {
  todos[index].importance++;
  let importance = todos[index].importance;
  btnPriorityLevel[index].innerHTML = importance;

  if (importance >= 0 && importance <= 1) {
    btnPriorityLevel[index].className = 'important bg-success';
  } else if (importance >= 2 && importance <= 3) {
    btnPriorityLevel[index].className = 'important bg-warning';
  } else if (importance >= 4 && importance <= 5) {
    btnPriorityLevel[index].className = 'important bg-danger';
  }
}

function addClickListener() {
  btnIncreaseLevel.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      important(index); // register(0);  register(1)
    });
  });
}

function renderTasks() {
  // let htmlText = ``;

  for (let todo of todos) {
    document.getElementById('demo').innerHTML += `
      <div class="card m-4" style="width: 18rem;">
        <div class="d-inline-block bg-info w-25 m-3 text-center ">Task</div>

        <div class="d-inline-block bg-info w-25 m-3 text-center ">
        </div>


        <img src=images/${todo.image} class="card-img-top p-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${todo.taskName}</h5>
          <p class="card-text">${todo.description}</p>
        </div>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
            <i class="fa-solid fa-triangle-exclamation"></i>
              Priority Level:<button class="important bg-success">${todo.importance}</button>
              <input type="submit" value="Increase" class="important-btn">
            </li>
            <li class="list-group-item"> <i class="fa-solid fa-calendar-days"></i> Deadline: ${todo.deadline}</li>
          </ul>
        </div>
        <div class="card-body">
        <button type="button" class="btn btn-danger mx-4">Delete</button>
        <button type="button" class="btn btn-info">Done</button>

        </div>
      </div>
      `;
  }
  // document.getElementById('demo').innerHTML = htmlText;
}

document.getElementById('sort').onclick = sortByRegisterValue;

function sortByRegisterValue() {
  todos.sort((a, b) => b.importance - a.importance);
  document.getElementById('demo').innerHTML = '';
  for (let todo of todos) {
    document.getElementById('demo').innerHTML += `
      <div class="card m-4" style="width: 18rem;">
        <div class="d-inline-block bg-info w-25 m-3 text-center ">Task</div>

        <div class="d-inline-block bg-info w-25 m-3 text-center ">
        </div>


        <img src=images/${todo.image} class="card-img-top p-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${todo.taskName}</h5>
          <p class="card-text">${todo.description}</p>
        </div>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
            <i class="fa-solid fa-triangle-exclamation"></i>
              Priority Level:<button class="important bg-success">${todo.importance}</button>
              <input type="submit" value="Increase" class="important-btn">
            </li>
            <li class="list-group-item"> <i class="fa-solid fa-calendar-days"></i> Deadline: ${todo.deadline}</li>
          </ul>
        </div>
        <div class="card-body">
        <button type="button" class="btn btn-danger mx-4">Delete</button>
        <button type="button" class="btn btn-info">Done</button>

        </div>
      </div>
      `;
  }
  // document.getElementById('demo').innerHTML = htmlText;
}
