// Library Functions

const myLibrary = [{title: "Harry Potter", author: "JK Rowling"},
                   {title: "The Bible", author: "God"}
];

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// };

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
    for (book of books) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = book.title + " by " + book.author;

        div.appendChild(p);
        library.appendChild(div);
    }
}

displayBook(myLibrary);