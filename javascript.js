const cardContainer = document.querySelector('.cardContainer')
const addBookContainer = document.querySelector('.addBookContainer')


// if checkbox is checked, return true
let checkbox = false;
function handleClick(cb) {
    checkbox = cb.checked;
}

let myLibrary = [];
class Book {

    constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}}


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
    // event.preventDefault();
}

// clear form input
function clearForm () {
    document
        .querySelectorAll(".popupForm")
        .forEach((e) => e.parentNode.removeChild(e));
    //document.getElementById("read").checked = false; 
    checkbox = false; 
}

function uniqueId(counter){
    let counterUniqueId = 'unique' + counter;
    return counterUniqueId;
}


let counter = 0;
function createCard() {
    for (let i = counter; i < myLibrary.length; i++) {

    let card = document.createElement('div');
    card.classList.add('cardDiv');
    card.setAttribute("id", uniqueId(counter));
    document.body.appendChild(card);
    cardContainer.appendChild(card);

    let paraAuthor = document.createElement('p');
    document.body.appendChild(paraAuthor);
    card.appendChild(paraAuthor);
    paraAuthor.setAttribute('style', 'margin: 0;');

    let paraTitle = document.createElement('p');
    document.body.appendChild(paraTitle);
    card.appendChild(paraTitle);
    paraTitle.setAttribute('style', 'margin: 0;');

    let paraPages = document.createElement('p');
    document.body.appendChild(paraPages);
    card.appendChild(paraPages);
    paraPages.setAttribute('style', 'margin: 0;');


    let buttonRead = document.createElement('input');
    document.body.appendChild(buttonRead);
    buttonRead.classList.add('cardRead');
    card.appendChild(buttonRead);
    buttonRead.type = "button"
    buttonRead.addEventListener('click', function(){
    if (buttonRead.value === 'Read') {
        buttonRead.value = 'Not read';
        buttonRead.setAttribute('style', 'background-color: #fa6055; border: 1px solid #fa6055; color: black;');
    } else if (buttonRead.value === 'Not read') {
        buttonRead.value = 'Read';
        buttonRead.setAttribute('style', 'background-color: #46fd35; border: 1px solid #46fd35; color: black;');
    }
    });

    let buttonRemove = document.createElement('input');
    document.body.appendChild(buttonRemove);
    buttonRemove.classList.add('cardRemove');
    card.appendChild(buttonRemove);
    buttonRemove.type = "button"
    buttonRemove.value = 'Remove';
    buttonRemove.addEventListener('click', function(){
    passBtnId(card.id);
    });

    // returns selected array, counter +1
    const newArr = myLibrary.slice([counter]);
    paraAuthor.textContent = newArr.map(a => '"' + a.author + '"')
    paraTitle.textContent = newArr.map(a => a.title);
    paraPages.textContent = newArr.map(a => a.pages + ' pages');
    buttonRead.value = newArr.map(a => a.read);
    // buttonRead styling
    if (buttonRead.value === 'Read') {
        buttonRead.setAttribute('style', 'background-color: #46fd35; border: 1px solid #46fd35; color: black;');
    } else if (buttonRead.value === 'Not read') {
        buttonRead.setAttribute('style', 'background-color: #fa6055; border: 1px solid #fa6055; color: black;');
    }

    counter += 1;
    }
}

function passBtnId(id) {
    let idUnique = '#' + id;
    document
    .querySelectorAll(idUnique)
    .forEach((e) => e.parentNode.removeChild(e));
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
    formAuthor.setAttribute("required", "required");
    formAuthor.setAttribute("pattern", "[A-Za-z]+");
    // formAuthor.setAttribute("minlength", "2");
    // formAuthor.setAttribute("maxlength", "5");
    formAuthor.setAttribute("placeholder", "Author");
    formAuthor.classList.add('popupInput');
    formAuthor.addEventListener('input', () => {
        formAuthor.setCustomValidity('');
        formAuthor.checkValidity();
    });
    
    formAuthor.addEventListener('invalid', () => {
        if (formAuthor.value === '') {
            formAuthor.setCustomValidity('Enter the name of the Author!');
          } else {
            formAuthor.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
          }
    })

    // title
    let formTitle = document.createElement('input');
    document.body.appendChild(formTitle);
    form.appendChild(formTitle);
    formTitle.setAttribute("type", "text");
    formTitle.setAttribute("id", "title");
    formTitle.setAttribute("name", "title");
    formTitle.setAttribute("required", "required");
    formTitle.setAttribute("placeholder", "Title");
    formTitle.classList.add('popupInput');
    formTitle.addEventListener('input', () => {
        formTitle.setCustomValidity('');
        formTitle.checkValidity();
    });
    
    formTitle.addEventListener('invalid', () => {
        if (formTitle.value === '') {
            formTitle.setCustomValidity('Please enter the title of the book!');
        }
    })


    // pages
    let formPages = document.createElement('input');
    document.body.appendChild(formPages);
    form.appendChild(formPages);
    formPages.setAttribute("type", "number");
    formPages.setAttribute("id", "pages");
    formPages.setAttribute("name", "pages");
    formPages.setAttribute('pattern', '[0-9];');
    formPages.setAttribute("required", "required");
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
    formButton.addEventListener('click', () => {
        if (form.checkValidity() === true) {
        onclick;
        addBookToLibrary(); 
        submitForm(event); 
        clearForm();
        }
    })
    



    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
}
