// book class : represent a book
class book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
  }
}

//UI classs: handle UI tasks      dispaly remove or show alter
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "hi Joan",
        author: "Joan",
        number: "14324221"
      },
      {
        title: "Go Ahead",
        author: "Joan",
        number: "21053154"
      }
    ];

    storedBooks.forEach(element => {
      UI.addBookToList(element);
    });
  }

  static addBookToList(book) {
    const tbody = document.querySelector(".bookList");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${
      book.number
    }</td><td><a href ="#" class = "btn btn-danger btn-sm delete" ><i class="fas fa-trash-alt deleteOne"></i></a><td>`;
    tbody.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#number").value = "";
  }
}
//store class: handle storage      stay in the broswer

//Event: Display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
//Event: Add a book
const list = document.querySelector(".myForm");
list.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const number = document.querySelector("#number").value;
  if (!title || !author || !number) {
    alert("please provide all the fields!");
  } else {
    const book1 = new book(title, author, number);
    UI.addBookToList(book1);
    UI.clearFields();
  }
});
//Event: Remove a book
document.querySelector(".bookList").addEventListener("click", e => {
  console.log(e.target);
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("deleteOne")) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
});
