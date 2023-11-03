import { Book } from "./book"

export class Library{
    private books: Book[];
    private address: string;
    private manager :string;

    constructor(book: Book[], address: string, manager:string){
        this.books = book;
        this.address = address;
        this.manager = manager;
    }
    getAdress(): string{
        return this.address;
    }
    setAdress(address: string):void{
        this.address = address;
    }
    getManager(): string{
        return this.manager;
    }
    setManager(manager: string):void{
        this.manager = manager;
    }

    toString():string{

        for(let book of this.books){
            console.log("Libro");
            book.toString();
            console.log("\n");
        }
        return "address - " + this.address + "\n" + "manager - " + this.manager;
    }

    getNumberOfBooks(){
        return this.books.length
    }

    findByAuthor(autor:String):Book[]{
      
        return this.books.filter(name => name.getAutor() == autor);
    }
}
