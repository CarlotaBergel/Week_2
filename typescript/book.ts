export class Book{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(titulo: string, npag: number, isbn: string, autor: string, editorial: string){
        this.title = titulo;
        this.nPages = npag;
        this.isbn = isbn;
        this.author = autor;
        this.editorial = editorial;
    }
    getTitulo(): string{
        return this.title
    }
    setTitulo(titulo: string):void{
        this.title = titulo;
    }
    getnumPag(): number{
        return this.nPages;
    }
    setnumPag(npag: number):void{
        this.nPages = npag;
    }
    getIsbn(): string{
        return this.isbn;
    }
    setIsbn(isbn: string):void{
        this.isbn = isbn;
    }
    getAutor(): string{
        return this.author;
    }
    setAutor(autor: string):void{
        this.author = autor;
    }
    getEditorial(): string{
        return this.editorial
    }
    setEditorial(edit: string):void{
        this.editorial = edit;
    }

    toString():void{
        console.log("Title - " + this.title +"\n" + 
                    "Numer of Pages - " + this.nPages + "\n" + 
                    "ISBN - " + this.isbn + "\n" + 
                    "Author - " + this.author + "\n" + 
                    "Editorial - " + this.editorial
                )
    }

}