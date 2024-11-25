const addBtn = document.querySelector('.add-btn-container>button');
const modal = document.querySelector('dialog');
const library = document.querySelector('.library');
const inputs = document.querySelectorAll('input');

const myLibrary = [];

class Book {
    constructor(author, title, pages, isRead){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
    }
    toggleIsRead() {    
        this.isRead = this.isRead === true ? false : true;
    }
}

function addBookToLibrary(values) {
    const [author, title, pages, isRead] = values;
    myLibrary.push(new Book(author, title, pages, isRead));
}

function getInputValues() {
    const inputValues = [];
    inputs.forEach(input => {
        if(input.id === 'read-status') {
            inputValues.push(input.checked);
        }else {
            inputValues.push(input.value);
        }
    });
    return inputValues;
}

function addBookToPage() {
    while(library.firstChild) {
        library.removeChild(library.firstChild);
    }
    library.style.padding = '0';
    for(let book of myLibrary) {
        const card = document.createElement('div');
        card.setAttribute('data-index', myLibrary.indexOf(book));
        const table = document.createElement('table');
        for(let prop in book) {
            if(prop === 'isRead' || !book.hasOwnProperty(prop)) continue;
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            const td = document.createElement('td');
            th.textContent = prop[0].toUpperCase() + prop.slice(1);
            td.textContent = book[prop];
            tr.appendChild(th);
            tr.appendChild(td);
            table.appendChild(tr);
            };
            const bookBtnsContainer = document.createElement('div');
            bookBtnsContainer.classList.add('book-btns');
            const toggleReadStatusBtn = document.createElement('button');
            const removeBookBtn = document.createElement('button');
            toggleReadStatusBtn.textContent = book.isRead === true ? 'Read' : 'Unread';
            removeBookBtn.textContent = 'Remove';
            toggleReadStatusBtn.addEventListener('click', (e) => {
                const dataIndex = e.target.parentElement.parentElement.getAttribute('data-index');
                myLibrary[+dataIndex].toggleIsRead();
                e.target.textContent = e.target.textContent === 'Read' ? 'Unread' : 'Read';
            });
            removeBookBtn.addEventListener('click', (e) => {
                const dataIndex = e.target.parentElement.parentElement.getAttribute('data-index');
                myLibrary.splice(+dataIndex, 1);
                const currantCard = document.querySelector(`div[data-index="${dataIndex}"]`);
                library.removeChild(currantCard);
                addBookToPage();
            });
            bookBtnsContainer.appendChild(toggleReadStatusBtn);
            bookBtnsContainer.appendChild(removeBookBtn);
            card.appendChild(table);
            card.appendChild(bookBtnsContainer);
            library.appendChild(card);
            library.style.padding = '15px';
        }
}

addBtn.addEventListener('click', () => {
    modal.showModal();
});

modal.addEventListener('close', () => {
    const inputValues = getInputValues();
    addBookToLibrary(inputValues);
    addBookToPage();
});