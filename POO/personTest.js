let {Person} = require("./person");

let hobbies = ["correr", "jugar", "leer", "saltar"];
let persona1 = new Person("Jonathan","Ortega", 70, 178, 1993, hobbies);

console.log(persona1.IMC());
console.log (persona1.edad());
persona1.printAll();
persona1.printHobbies();