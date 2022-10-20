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
    this.changeStatus = function(){
        read == false ? true : false;
    }
    this.deleteBook = function(){
        console.log('Delete this book');
    }
}

function addBookToLibrary(){

}

function removeBookFromLibrary(){

}

function showCollection(){

    const myCollection = document.querySelector('.collection-books');

    myLibrary.forEach(element => {

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
        //CREATE BOOK UI
        const bookUI = document.createElement('div');
        bookUI.setAttribute('class', 'book-ui');

        //APPEND UI
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        const readInfo = document.createElement('div');
        readInfo.setAttribute('class', 'data-read');
        readInfo.innerText = element.read;
        
        element.read == true ? bookUI.classList.add('read') : bookUI.classList.add();

        bookUI.appendChild(readInfo);
        bookUI.appendChild(deleteButton);
        newBook.appendChild(bookUI);
      
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


        //APPEND ALL TO NEW BOOK
        newBookInfo.appendChild(newInfo);
        newBookInfo.appendChild(newData);
        newBook.appendChild(newBookInfo);



        myCollection.appendChild(newBook);       

    });
}

// function checkReadBooks(){
//     const allBooks = document.querySelectorAll('.book');
// }

showCollection();

const allBooks = document.querySelectorAll('.book-ui');
allBooks.forEach(book => book.addEventListener('click', changeStatus));

// function changeStatus(e){
//     console.log(e);
//     this.classList.toggle('read');
// }




