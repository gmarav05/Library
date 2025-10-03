const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("close");
const addBookBtn = document.getElementById("addBookBtn");
const cardsContainer = document.getElementById("cardsContainer");
const form = document.getElementById("form");

// show modal

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// close modal

closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  (this.bookId = crypto.randomUUID()),
    (this.bookTitle = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

Book.prototype.setRead = function () {
  this.read = !this.read;
};

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const newBook = new Book(
    document.getElementById("bookName").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").checked
  );
  addBookToLibrary(newBook);
  dialog.close();
  form.reset();
});

function displayBooks() {
  cardsContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");

    bookCard.classList.add("card");

    bookCard.setAttribute("data-id", book.bookId);

    const bookName = document.createElement("h3");
    bookName.textContent = `${book.bookTitle}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${book.read ? "Read" : "Not Read"}`;

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "Set Read";
    readButton.addEventListener("click", function () {
      book.setRead();
      displayBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove Book";
    removeButton.addEventListener("click", function () {
      const index = myLibrary.findIndex((b) => b.bookId === book.bookId);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
      }
    });

    bookCard.appendChild(bookName);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(status);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    cardsContainer.appendChild(bookCard);
  });
}

addBookToLibrary(new Book("Cosmos", "Carl Sagan", 396, read));
