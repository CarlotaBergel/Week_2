class Person{
    constructor(name, surname, weight, height, añoNacimiento, hobbies){
        this.name = name;
        this.surname = surname;
        this.age;
        this.weight = weight;
        this.height = height;
        this.yearOfBirth = añoNacimiento;
        this.hobbies = hobbies;
    }

    IMC(){
        let imc = Math.round(this.weight/(this.height*this.height)*10000);
        return imc;
    }
    edad(){
        let añoActual = 2023;
        let year = añoActual - this.yearOfBirth
        return year;
    }
    printAll(){
        console.log("Nombre - " + this.name);
        console.log("Apellido - " + this.surname);
        console.log("Peso - " + this.weight);
        console.log("Altura - " + this.height);
        console.log("Año de nacimiento - " + this.yearOfBirth);
    }
    printHobbies(){
        for(let i = 0; i < this.hobbies.length; i++){
            console.log(this.hobbies[i])
        }
    }
}
module.exports = {Person};