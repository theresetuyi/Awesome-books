//class Book{
//    constructor( title,author){
//        this.title=title,
//        this.author=author
        
//    }
//}
//class userInt{
//    static desplayBooks() {
//       const storedBooks=[
//            {
//                title:"title one",
//                author:"author one"
//            },
//            {
//                title:"title two",
//                author:"author two"
//            }] 
//       const books=storedBooks;
//    }
//}

//function Book(title,author){
//    this.title = title;
//    this.author = author
//}

//Book.prototype.toString = function(){
//    return this.title + 'by' + this.author;}
//Book.prototype.print = function(){
//    console.log(this.toString());
//}

//var mobyDick = new Book ( 'title one' , 'author one');

//mobyDick.print()
//const formelement = document.getElementsByTagName('book-form');// eslint-disable-line
//this.title = document.getElementById('title');
//this.author = document.getElementById('author');

//formelement[0].addEventListener('input', () => {
//  const data = {
//    title: title.value,
//    author: author.value,
    
//  };
//  localStorage.setItem('userInput', JSON.stringify(data));
//});

//window.addEventListener('load', () => {
//  const data = JSON.parse(localStorage.getItem('userInput'));
//  title.value = data.title;
//  author.value = data.author;
//});
document.getElementById('book-form').addEventListener('submit', bookform)

function bookform(e){
    console.log('it is work');
    e.preventDefault()
}


//class Store {
//  static getBooks() {
//    let books;
//    if (localStorage.getItem('books') === null) {
//      books = [];
//    } else {
//      books = JSON.parse(localStorage.getItem('books'));
//    }
//    return books;
//  }

//  static addBook(book) {
//    const books = Store.getBooks();
//    books.push(book);
//    localStorage.setItem('books', JSON.stringify(books));
//  }
//}
//class user={
//    static displayBooks(){
//        const books= storeBooks();
//        book.forEach((book)=>user.addBookToList(book));
//    }
//          static addBookToList(book){
//            const list=document.querySelector("#book-list");
//            const row =document.createElement("tbody");
//            list.appendChild(row);
//          }
//        };
//        document.addEventListener(DOMContentLoaded,user.displayBooks);
//        document.querySelector("#book-form").addEventListener("add",(e) {
//            e.preventDefault();
//            const title=document.querySelector("#title").value;
//            const author=document.querySelector("#author").value;
//            const book=newBook (title,author);
//            user.addBookToList(book);
//            Store.addBook(book);
//            user.clearFields();
//        });
//        document.querySelector('#book-list').addEventListener('click', (e) => {
//            user.deleteBook(e.target);
//            Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
//          });
    
