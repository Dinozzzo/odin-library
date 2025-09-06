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

for (const book of myLibrary) {
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
