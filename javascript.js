const cardContainer = document.querySelector('.cardContainer')
const addBookContainer = document.querySelector('.addBookContainer')


// if checkbox is checked, return true
let checkbox = false;
function handleClick(cb) {
    checkbox = cb.checked;
}

let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary() {
    let inputRead = '';
    if (checkbox === false) {
        inputRead = 'Not read';
    } else if (checkbox === true) {
        inputRead = 'Read';
    }

    const newBook = new Book(author.value, title.value, pages.value, inputRead)
    myLibrary.push(newBook)

    createCard();
}

function submitForm(event){
    event.preventDefault();
}

// clear form input
function clearForm () {
    document
        .querySelectorAll(".popupForm")
        .forEach((e) => e.parentNode.removeChild(e));
    //document.getElementById("read").checked = false; 
    checkbox = false; 
}


function createCard() {
    for (let i = 0; i < myLibrary.length; i++) {

    let card = document.createElement('div');
    card.classList.add('cardDiv');
    document.body.appendChild(card);
    cardContainer.appendChild(card);

    let paraAuthor = document.createElement('p');
    document.body.appendChild(paraAuthor);
    card.appendChild(paraAuthor);

    let paraTitle = document.createElement('p');
    document.body.appendChild(paraTitle);
    card.appendChild(paraTitle);

    let paraPages = document.createElement('p');
    document.body.appendChild(paraPages);
    card.appendChild(paraPages);

    let paraRead = document.createElement('button');
    paraRead.classList.add('cardRead');
    document.body.appendChild(paraRead);
    card.appendChild(paraRead);
    paraAuthor.textContent = myLibrary.map(a => 'Author: ' + a.author);
    paraTitle.textContent = myLibrary.map(a => 'Title: ' + a.title);
    paraPages.textContent = myLibrary.map(a => 'Pages: ' + a.pages);
    paraRead.textContent = myLibrary.map(a => a.read);
    spliceArray = myLibrary.splice(0)
    }
}



function addBook () {
    // create form and add style class
    let form = document.createElement('form');
    document.body.appendChild(form);
    addBookContainer.appendChild(form);
    form.classList.add('popupForm');

    // header title
    let headerTitle = document.createElement('h3');
    document.body.appendChild(headerTitle);
    form.appendChild(headerTitle);
    headerTitle.textContent = 'Add new book';
    headerTitle.classList.add('popupHeader');

    // author
    let formAuthor = document.createElement('input');
    document.body.appendChild(formAuthor);
    form.appendChild(formAuthor);
    formAuthor.setAttribute("type", "text");
    formAuthor.setAttribute("id", "author");
    formAuthor.setAttribute("name", "author");
    formAuthor.setAttribute("placeholder", "Author");
    formAuthor.classList.add('popupInput');

    // title
    let formTitle = document.createElement('input');
    document.body.appendChild(formTitle);
    form.appendChild(formTitle);
    formTitle.setAttribute("type", "text");
    formTitle.setAttribute("id", "title");
    formTitle.setAttribute("name", "title");
    formTitle.setAttribute("placeholder", "Title");
    formTitle.classList.add('popupInput');


    // pages
    let formPages = document.createElement('input');
    document.body.appendChild(formPages);
    form.appendChild(formPages);
    formPages.setAttribute("type", "text");
    formPages.setAttribute("id", "pages");
    formPages.setAttribute("name", "pages");
    formPages.setAttribute("placeholder", "Pages");
    formPages.classList.add('popupInput');

    // read checkbox
    let formRead = document.createElement('input');
    document.body.appendChild(formRead);
    form.appendChild(formRead);
    formRead.setAttribute("type", "checkbox");
    formRead.setAttribute("id", "read");
    formRead.setAttribute("name", "read");
    formRead.setAttribute("onclick", "handleClick(this)");
    //formRead.classList.add('popupInput');
    formRead.classList.add('popupFlex');
    // label checkbox
    let formReadLabel = document.createElement('label')
    document.body.appendChild(formReadLabel);
    form.appendChild(formReadLabel);
    formReadLabel.setAttribute("for", "read");
    formReadLabel.setAttribute("id", "formLabel");
    formReadLabel.textContent = 'Have you read it?';
    formReadLabel.classList.add('popupFlex');
   


    // submit button
    let formButton = document.createElement('input');
    document.body.appendChild(formButton);
    form.appendChild(formButton);
    formButton.setAttribute("type", "submit");
    formButton.setAttribute("id", "formSubmit");
    formButton.setAttribute("name", "formSubmit");
    formButton.classList.add('popupButton');
    formButton.setAttribute("onclick", "addBookToLibrary(); submitForm(event); clearForm();");



    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
}
