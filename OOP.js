//object literal
const book = {
   title: "Hippie",    
   author: "Paulo Coelho",  
   year: "2018"
}
console.log(book['title']);
console.log(book.title);

//object constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const book1 = new Book('Hippie', 'Paulo Coelho', '2018');
book1 instanceof Book;
console.log(book1);
const book2 = new Book('The Alchemist', 'Paulo Coelho', '1988');