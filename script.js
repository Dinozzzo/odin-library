const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBooktoLibrary(title, author, pages, read, id) {
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  return newBook;
}

addBooktoLibrary(
  "The Hobbit",
  "J.R.R. Tolkien",
  "300 pages",
  "Read",
  crypto.randomUUID()
);

addBooktoLibrary(
  "Harry Potter",
  "J.K Rowling",
  "233 pages",
  "Not read",
  crypto.randomUUID()
);

// CREATION DU TABLEAU

const tbody = document.querySelector("tbody");

function renderBookRow(book) {
  // ROW
  let row = document.createElement("tr");
  tbody.appendChild(row);
  // TITLE
  let title = document.createElement("td");
  title.textContent = book.title;
  row.appendChild(title);
  // AUTHOR
  let author = document.createElement("td");
  author.textContent = book.author;
  row.appendChild(author);
  // PAGES
  let pages = document.createElement("td");
  pages.textContent = book.pages;
  row.appendChild(pages);
  // STATUS
  let status = document.createElement("td");
  status.textContent = book.read;
  row.appendChild(status);
}

myLibrary.forEach(renderBookRow);

// DIALOG

const dialog = document.querySelector(".add-dialog");
const showButton = document.querySelector(".createbook");
const closeButton = document.querySelector(".closedialog");
const form = document.querySelector("form");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "valid") {
    const fd = new FormData(form);
    const title = fd.get("title");
    const author = fd.get("author");
    const pages = fd.get("pages");
    const read = fd.get("read");
    const book = addBooktoLibrary(
      title,
      author,
      pages,
      read,
      crypto.randomUUID()
    );
    renderBookRow(book);
    form.reset();
  }
});
