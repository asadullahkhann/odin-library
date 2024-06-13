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

Book.prototype.setIsRead = function(bool) {
    this.isRead = bool;
}

function addBookToLibrary(inputs) {
    let [author, title, pages, isRead] = inputs;
    const newBook = new Book(author, title, pages, isRead);
    myLibrary.push(newBook);
    let tHeadings = ['Author', 'Title', 'Pages'];
    const card = document.createElement('div');
    const table = document.createElement('table');
    const trs = [];
    for(let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.textContent = tHeadings[i];
        td.textContent = inputs[i];
        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    const bookBtnsContainer = document.createElement('div');
    bookBtnsContainer.classList.add('book-btns');
    const toggleReadBtn = document.createElement('button');
    const removeBtn = document.createElement('button')
    card.appendChild(table);
    library.appendChild(card);
    library.style.display = 'flex';
}