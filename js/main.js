let myLibrary = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  display()
}

function display(){ 
    myLibrary.forEach((book) => {
        const title = document.createElement('span')
        book.title;

        book.author;
        
        book.pages;

    })

}