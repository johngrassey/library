// Library Functions

const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
};

// function addBookToLibrary() {
//   let title = prompt("Title?");
//   let author = prompt("Author");

//   let book1 = new Book(title, author);
//   myLibrary.push(book1);
// }

// addBookToLibrary();
// console.log(myLibrary);

// Display Functions

const library = document.querySelector(".library");

function displayBook(books) {
    books.map(book => {
        const div = document.createElement("div");
        div.classList.add("book");
        const p = document.createElement("p");
        p.textContent = `${book.title} by ${book.author}`;
    
        div.appendChild(p);
        library.appendChild(div);
    });
}

displayBook(myLibrary);


// DIALOG MODAL

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showDialog");
const closeButton = document.querySelector("#close");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})


