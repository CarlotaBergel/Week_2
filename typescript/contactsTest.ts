import {Person} from "./person";
import {Contacts} from "./contacts";

let pers1: Person = new Person ("Jonathan", 29, "Calle Justin");
let pers2: Person = new Person ("Naila", 2, "Calle vicalvaro");
let pers3: Person = new Person ("Nyan", 4, "Calle Noruega");

let personas = [pers1, pers2, pers3];

let contactos: Contacts = new Contacts();

contactos.people = personas;

contactos.printCalendar();