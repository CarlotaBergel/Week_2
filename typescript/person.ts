export class Person{
    public name: String;
    public age: Number;
    private address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printName(){
        return this.name
    }

    yearOfBirth(añoActual: number, edad: number){
        
        let añoNaciemiento = añoActual - edad 

        return añoNaciemiento
    }

    setAddress(direccion: string):void{
        this.address = direccion;
    }

    getAddress(){
        return this.address 
    }
        
}
