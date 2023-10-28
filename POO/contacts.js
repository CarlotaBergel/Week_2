class Contacts
{
    constructor(){
        this.persons = new Array ();
    }

    printPersons(){
        for(let i = 0; i < this.persons.length; i++){
            console.log("Nombre - " + this.name);
            console.log("Apellido - " + this.surname);
            console.log("Peso - " + this.weight);
            console.log("Altura - " + this.height);
            console.log("Año de nacimiento - " + this.yearOfBirth);
        }
    }
}

module.exports = {Contacts};