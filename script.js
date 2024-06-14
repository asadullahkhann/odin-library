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

Book.prototype.toggleIsRead = function() {
    this.isRead = this.isRead === true ? false : true;
}

function addBookToLibrary() {
    const inputs = document.querySelectorAll('input');
    const inputValues = [];
    for(let input of inputs) {
        if(input.id === 'read-status') {
            inputValues.push(input.checked);
            continue;
        }
        inputValues.push(input.value);

    }
    myLibrary.push(new Book(...inputValues));
}

addBtn.addEventListener('click', () => {
    modal.showModal();
})