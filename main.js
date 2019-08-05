//book class declaration
class book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
  }
}
//put one into the list
const tbody = document.querySelector("tbody");
const row1 = document.createElement("tr");
row1.innerHTML = `<td>A Smart Pig</td>
<td>Jane E.</td>
<td>53452345</td>
<td><a href = "#" id = "delete-btn" class = "btn btn-danger btn-sm delete"><i class="fas fa-trash-alt icon"></i></a></td>`;
tbody.appendChild(row1);

//addOne into the list
const form = document.querySelector(".myForm");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const number = document.querySelector("#number");

form.addEventListener("submit", addOne);

function addOne(e) {
  e.preventDefault();
  console.log(title.value);
  console.log(author.value);
  console.log(number.value);
  let row = document.createElement("tr");
  row.innerHTML = `<td>${title.value}</td>
  <td>${author.value}</td>
  <td>${number.value}</td>
  <td><a href = "#" id = "delete-btn" class = "btn btn-danger btn-sm delete"><i class="fas fa-trash-alt icon"></i></a></td>`;
  tbody.appendChild(row);
  clearFields();
}
//clear the input box
function clearFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#number").value = "";
}
//deleteOne into the list
document.querySelector(".bookList").addEventListener("click", deleteBook);

function deleteBook(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("icon")) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
}
