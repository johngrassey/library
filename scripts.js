// Library Functions

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

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

function addBook(event) {
    event.preventDefault();

    const book = new Book (title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);

}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");

const library = document.querySelector(".library");

function renderBookList() {

    clearBookList();
    for (const book in myLibrary) {
        const div = document.createElement("div");
        div.classList.add("book");
        div.classList.add("b" + book);

        const header = document.createElement("h3");
        header.textContent = myLibrary[book].title;

        const img = document.createElement("img");
        img.classList.add("trash")
        img.setAttribute("src", "images/trash-can-outline.svg");
        img.setAttribute("alt", "Trash");
        img.setAttribute("id", "b" + book)

        img.addEventListener("click", removeCard)

        const p = document.createElement("p");
        p.classList.add("author");
        p.textContent = "By " + myLibrary[book].author;

        const page = document.createElement("p");
        page.textContent = "Pages: " + myLibrary[book].pages;
    
        const headerdiv = document.createElement("div");
        headerdiv.classList.add("bookheader");
    
        const pRead = document.createElement("p");
        pRead.textContent = "Read:"
    
        const readLbl = document.createElement("label");
        readLbl.classList.add("switch");
        readLbl.setAttribute("id","b" + book)
        const readInp = document.createElement("input");
        readInp.setAttribute("type", "checkbox");
        if (myLibrary[book].read) {readInp.checked = true};
        const readSpn = document.createElement("span");
        readSpn.classList.add("slider");
        readSpn.classList.add("round");
    
        div.appendChild(headerdiv);
        headerdiv.appendChild(header);
        headerdiv.appendChild(img);
        div.appendChild(p);
        div.appendChild(page);
        div.appendChild(pRead);
        readLbl.appendChild(readInp);
        readLbl.appendChild(readSpn);
        div.appendChild(readLbl);
    
        readInp.addEventListener("change", readBook);
    
        library.appendChild(div);
    }
};

function clearBookList() {
    library.innerHTML = "";
}

// DELETE BOOK

function removeCard (event) {
        const id = Number(event.target.getAttribute("id").substring(1));
        myLibrary.splice(id, 1);
        renderBookList();
};

form.addEventListener("submit", (event) => {
    addBook(event);
    renderBookList();
    clearform();
});
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