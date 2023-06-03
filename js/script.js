window.name = "script";
const signOut = document.querySelector(".signOut");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const img = document.querySelector(".image");
const err = document.querySelector(".error");
const addTodo = document.querySelector(".addTodo");
const row = document.querySelector(".row");
let card;
let editCard;
let removeCard;
let toDo = {};
let toDoList = [];

if (localStorage.length === 0) {
  window.open("./register.html", "script");
}
signOut.addEventListener("click", () => {
  window.open("./auth.html", "script");
});
function renderCard() {
  row.innerHTML += card;
}

if (localStorage.getItem("todo") != undefined) {
  console.log(JSON.parse(localStorage.todo).length);
  for (let i = 0; i < JSON.parse(localStorage.todo).length; i++) {
    card = JSON.parse(localStorage.getItem("todo"))[i].todo;
    renderCard();
  }
}

addTodo.addEventListener("click", (evt) => {
  evt.preventDefault();
  card = `
  <div class="boxes">
  <h4>${title.value}</h4> 
  <img src="${img.value}" alt="картинка">
  <p>${description.value}</p> 
  <div class="btn_inline">
  <button class="remove">remove</button>
  <button class="edit">edit</button>
  </div>
  </div>
  `;
  toDo.todo = card;
  toDoList.push(toDo);
  renderCard();
  localStorage.setItem("todo", JSON.stringify(toDoList));
  editCard = document.querySelectorAll(".edit");
  editCard.forEach((item) =>
  item.addEventListener("click", () => {
    let newTitle = prompt("New title");
    let newDescription = prompt("New description");
    let newPic = prompt("New pic");
    let currCard = item.parentElement.parentElement;
    let currCardChildren = currCard.children;
    currCardChildren[0].innerText = newTitle;
    currCardChildren[1].setAttribute("src", newPic);
      currCardChildren[2].innerText = newDescription;
    })
    );
    removeCard = document.querySelectorAll(".remove");
    removeCard.forEach((item) =>
    item.addEventListener("click", () => {
      let currCard = event.target.parentElement.parentElement;
      currCard.remove();
    })
    );
  });
  