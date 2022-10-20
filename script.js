const overlayDialog = document.getElementById('overlay-container'); 
let myLibrary = [];

let book0 = new Book('Popolna omama', 'Norman Ohler', 338, true);
let book1 = new Book('Shadow state', 'Luke Harding', 342, false);
let book2 = new Book('Bill Hicks, Agent of Evolution', 'Kevin Booth, Michel Bertin', 437, true);
let book3 = new Book('Love All The People', 'Constable', 384, true);

myLibrary.push(book0, book1, book2, book3);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){  
    overlayDialog.style.visibility = 'visible';
    overlayDialog.style.opacity = 1;

}

function closeOverlay(){
    overlayDialog.style.visibility = 'hidden';
    overlayDialog.style.opacity = 0;
}

function showCollection(){

    const myCollection = document.querySelector('.collection-books');

    myLibrary.forEach((element,index) => {

        //CREATE NEW BOOK
        let newBook = document.createElement('div');
        newBook.setAttribute('class', 'book');
        //CREATE BOOK INFO
        let newBookInfo = document.createElement('div');
        newBookInfo.setAttribute('class', 'book-info'); 
        //CREATE NEW INFO
        let newInfo = document.createElement('div');
        newInfo.setAttribute('class','info'); 
        //CREATE NEW DATA
        let newData = document.createElement('div');
        newData.setAttribute('class','data');
      
        //APPEND INFO
        let title = document.createElement('div');
        title.innerText = 'TITLE';
        let author = document.createElement('div');
        author.innerText = 'AUTHOR';
        let pages = document.createElement('div');
        pages.innerText = 'PAGES';

        newInfo.appendChild(title);
        newInfo.appendChild(author);
        newInfo.appendChild(pages);

        //APPEND DATA
        let newBookTitle = document.createElement('div');
        newBookTitle.innerText = element.title;
        let newBookAuthor = document.createElement('div');
        newBookAuthor.innerText = element.author;
        let newBookPages =  document.createElement('div');
        newBookPages.innerText = element.pages;

        newData.appendChild(newBookTitle);
        newData.appendChild(newBookAuthor);
        newData.appendChild(newBookPages);

        //APPEND DATA TO NEW BOOK
        newBookInfo.appendChild(newInfo);
        newBookInfo.appendChild(newData);
        newBook.appendChild(newBookInfo);

        //CREATE BOOK UI
        const bookUI = document.createElement('div');
        bookUI.setAttribute('class', 'book-ui');

        //APPEND UI
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'REMOVE';
        deleteButton.classList.add('rm-btn');
        deleteButton.setAttribute('onclick', `deleteThisBook(${index})`);
        const readBtn = document.createElement('button');
        readBtn.classList.add('read-btn');
        readBtn.setAttribute('id', index);

        element.read == true ? readBtn.innerText='READ':readBtn.innerText = 'NOT READ';
        element.read == true ? readBtn.classList.add('done') : readBtn.classList.add('todo');
        readBtn.setAttribute('onclick', 'toggleStatus(this.id)');
        bookUI.appendChild(readBtn);
        bookUI.appendChild(deleteButton);
        newBook.appendChild(bookUI);
        newBook.setAttribute('book-number', index);

        myCollection.appendChild(newBook); 
    });
}

function deleteThisBook(num){    
    //REMOVE SELECTED BOOK FROM ARRAY
    myLibrary.splice(num, 1);
    //CLEAR ALL REMAINING BOOKS FROM LIBRARY
    const bookCollection = document.querySelector('.collection-books');
    while (bookCollection.firstChild) {
      bookCollection.removeChild(bookCollection.lastChild);
    }  
    //RE-RENDER UPDATED LIBRARY
    showCollection();
}

function markAsRead(){
    console.log("Marked");
}

function toggleStatus(btn){

    let currentButton = document.getElementById(btn);
    let classValue = currentButton.classList[1];
    
    if(classValue == 'done'){
        currentButton.classList.remove('done');
        currentButton.classList.add('todo');
        currentButton.innerText = 'NOT READ';
    }else if(classValue == 'todo'){
        currentButton.classList.remove('todo');
        currentButton.classList.add('done');
        currentButton.innerText = 'READ';
    }else{
        console.error('Houston, we have a problem.');
    }
}

showCollection();


