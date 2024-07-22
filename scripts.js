// Library Functions

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// DIALOG MODAL

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showDialog");
const closeButton = document.querySelector("#close");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    clearform();
})

function clearform() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    dialog.close();
}

// CREATE OBJECT

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");
const library = document.querySelector(".library");

function createBook(event) {
    event.preventDefault();
    let book = new Book (title.value, author.value, pages.value, read.value);
    myLibrary.push(book);

    const div = document.createElement("div");
    div.classList.add("book");
    const header = document.createElement("h3");
    header.textContent = book.title;
    const p = document.createElement("p");
    p.textContent = book.author;
    const page = document.createElement("p");
    page.textContent = book.pages + " pages";

    div.appendChild(header);
    div.appendChild(p);
    div.appendChild(page);

    if (book.read === "true") {
        const readtoggle = document.createElement("div");
        readtoggle.textContent = "Read";
        div.appendChild(readtoggle);
    }

    library.appendChild(div);

    clearform();
}

form.addEventListener("submit", createBook);