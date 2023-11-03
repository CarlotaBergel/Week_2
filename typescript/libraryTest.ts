import { Book } from "./book";
import { Library } from "./library";

let book1: Book = new Book ("After2", 425, "isbn524963287", "Anna Tood", "GH");
let book2: Book = new Book ("Culpa mia", 652, "isbn6978163", "tierno galvan", "salvat");

let books: Book[] = [book1,book2]

let libreria: Library = new Library (books, "Calle Zaragoza", "paco lucia");

libreria.toString();


console.log(libreria.getNumberOfBooks())
console.log(libreria.findByAuthor("Anna Tood"))