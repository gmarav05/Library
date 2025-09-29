const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
// const outputBox = document.querySelector("output");
// const selectEl = favDialog.querySelector("select");
const closeButton = document.getElementById("close");
// const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click" , () => { 
    favDialog.showModal();
});



closeButton.addEventListener("click" , () => {
    favDialog.close();
});


const myLibrary = [];

function Book(title, author, pages, read) {

    this.id = crypto.randomUUID(),
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    
}

console.log(Book());