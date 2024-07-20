const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
};

function addBookToLibrary() {
  let title = prompt("Title?");
  let author = prompt("Author");

  let book1 = new Book(title, author);
  myLibrary.push(book1);
}

addBookToLibrary();
console.log(myLibrary);