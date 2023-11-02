"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    var signoZodiaco = "";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        signoZodiaco = "Acuario";
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        signoZodiaco = "Piscis";
    }
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        signoZodiaco = "aries";
    }
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        signoZodiaco = "Tauro";
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        signoZodiaco = "Geminis";
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        signoZodiaco = "Cancer";
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        signoZodiaco = "Leo";
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        signoZodiaco = "Virgo";
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        signoZodiaco = "Libra";
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        signoZodiaco = "Escorpio";
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        signoZodiaco = "Sagitario";
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        signoZodiaco = "Capricornio";
    }
    else {
        console.log("No es correcto");
    }
    return signoZodiaco;
}
// console.log(zodiac(2,6));
function continent(country) {
    var continente;
    switch (country) {
        case "Estados Unidos":
        case "Costa rica":
        case "Perú ":
        case "Panamá ":
        case "Venezuela ":
            continente = "América";
            break;
        case "Filipinas":
        case "China":
        case "Corea del Norte":
        case "Corea del Sur ":
        case "Catar ":
            continente = "Asia";
            break;
        case "España":
        case "Portugal":
        case "Italia ":
        case "Francia":
        case "Andorra":
            continente = "Europa";
            break;
        case "Marruecos":
        case "Argelia":
        case "kenia":
        case "Congo":
        case "Mali":
            continente = "Africa";
            break;
        case "Fiyi":
        case "Palaos":
        case "Australia":
        case "Nueva Zelanda":
        case "Tonga":
            continente = "Oceania";
            break;
    }
    return continente;
}
// console.log(continent("España"))
function isEven(num) {
    var mensaje;
    if (num % 2 == 0) {
        mensaje = "El numero es par";
    }
    else {
        mensaje = "El numero es impar";
    }
    return mensaje;
}
exports.isEven = isEven;
// console.log(isEven(12));
