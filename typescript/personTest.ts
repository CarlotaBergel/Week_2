import { Person } from "./person";

let pers : Person = new Person ("Carlota", 24, "calle Santiago");

console.log(pers);

console.log(pers.printName());
console.log(pers.yearOfBirth(2024,24));

pers.setAddress("Calle Acoruña");
console.log(pers.getAddress());