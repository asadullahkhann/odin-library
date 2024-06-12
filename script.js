const addBtn = document.querySelector('.add-btn-container>button');
const modal = document.querySelector('dialog');
const library = document.querySelector('.library');

const myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(inputs) {
    let [author, title, pages, isRead] = inputs;
    const newBook = new Book(author, title, pages, isRead);
    myLibrary.push(newBook);
}