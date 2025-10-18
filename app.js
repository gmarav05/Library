const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("close");
const addBookBtn = document.getElementById("addBookBtn");
const cardsContainer = document.getElementById("cardsContainer");
const form = document.getElementById("form");

class Book {
  constructor(title, author, pages, read) {
  this.bookId = crypto.randomUUID();
    this.bookTitle = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }  

  toggleRead() {
   this.read = !this.read;
  }

}

class Library {
  constructor () {
    this.myLibrary = [];
  }

  addBookToLibrary (book) {
    this.myLibrary.push(book);
    this.displayBooks();
  }

  removeButton(bookId) {
        const index = this.myLibrary.findIndex((book) => book.bookId === bookId);
        if (index !== -1) {
          this.myLibrary.splice(index, 1);
          this.displayBooks();
        }
  };


  displayBooks() {
    cardsContainer.innerHTML = "";

    this.myLibrary.forEach((book) => {
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
      readButton.addEventListener("click", () => {
        book.toggleRead();
        this.displayBooks();
      });

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.textContent = "Remove Book";
        removeButton.addEventListener('click',() =>  {
          this.removeButton(book.bookId);
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

}


const myLibrary = new Library();


// show modal

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// close modal

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const newBook = new Book(
    document.getElementById("bookName").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").checked
  );
  myLibrary.addBookToLibrary(newBook);
  dialog.close();
  form.reset();
});


myLibrary.addBookToLibrary(new Book("Cosmos", "Carl Sagan", 396, read));
