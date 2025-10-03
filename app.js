const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("close");

// show modal 

showButton.addEventListener("click" , () => { 
    dialog.showModal();
});

// close modal

closeButton.addEventListener("click" , () => {
    dialog.close();

    outputBox.value = dialog.returnValue === "default"
      ? "No return value."
      :`ReturnValue:
      ${dialog.returnValue}.`;
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
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);   
}

Book.prototype.setRead = function () {
    this.read = !this.read;
}

addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const newBook = new Book(
        3, 
        document.getElementById("bookName").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("read").value
    );

    console.log(newBook);
    
})














const displayBooks = () => {
    card.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const addCard = document.createElement("div");
        const book = myLibrary[i];
        addCard.classList.add("book");
        const deleteCard = document.createElement("button");
        deleteCard.innerText = "\u00D7";
        deleteCard.addEventListener('click', () => {
            if (window.confirm("Sure you want to delete this card?")) {
                myLibrary.splice(i,1);
                displayBooks();
            }
        })
        
    }

}