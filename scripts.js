// Library Functions

let myLibrary = [];

function Book(title, author, pages, read, number) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.number = number;
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

let bookIndex = 0

function createBook(event) {
    event.preventDefault();
    let book = new Book (title.value, author.value, pages.value, read.checked, bookIndex);
    myLibrary.push(book);

    const div = document.createElement("div");
    div.classList.add("book");
    div.classList.add("class", ("b" + bookIndex));

    const header = document.createElement("h3");
    header.textContent = book.title;

    const img = document.createElement("img");
    img.classList.add("trash")
    img.setAttribute("src", "images/trash-can-outline.svg");
    img.setAttribute("alt", "Trash");
    img.setAttribute("id", "b" + bookIndex)

    img.addEventListener("click", removeCard)

    const p = document.createElement("p");
    p.textContent = "By " + book.author;

    const page = document.createElement("p");
    page.textContent = book.pages + " pages";

    const headerdiv = document.createElement("div");
    headerdiv.classList.add("bookheader");

    const readLbl = document.createElement("label");
    readLbl.classList.add("switch");
    readLbl.setAttribute("id","b" + bookIndex)
    const readInp = document.createElement("input");
    readInp.setAttribute("type", "checkbox");
    const readSpn = document.createElement("span");
    readSpn.classList.add("slider");
    readSpn.classList.add("round");

    div.appendChild(headerdiv);
    headerdiv.appendChild(header);
    headerdiv.appendChild(img);
    div.appendChild(p);
    div.appendChild(page);
    readLbl.appendChild(readInp);
    readLbl.appendChild(readSpn);
    div.appendChild(readLbl);

    readInp.addEventListener("change", readBook);

    library.appendChild(div);

    clearform();
    bookIndex++

};

// DELETE BOOK

function removeCard (event) {
        const id = event.target.getAttribute("id");
        document.querySelector("." + id).remove();
        for (let i = myLibrary.length - 1; i >=0; i--) {
            if (myLibrary[i].number === Number(id.substring(1))) {
                myLibrary.splice(i, 1);
            }
        }
};

form.addEventListener("submit", createBook);

// MARK BOOK READ

function readBook (event) {
    const toggle  = this.parentElement.getAttribute("id");

    if (this.checked) {

        for (let i = myLibrary.length - 1; i >=0; i--) {
            if (myLibrary[i].number === Number(toggle.substring(1))) {
                myLibrary[i].read = true;
            }
        }
        console.log(toggle)
        console.log("Checkbox is checked..");

    } else {
        for (let i = myLibrary.length - 1; i >=0; i--) {
            if (myLibrary[i].number === Number(toggle.substring(1))) {
                myLibrary[i].read = false;
            }
    }
        console.log(toggle)
        console.log("Checkbox is not checked..");
    };
}