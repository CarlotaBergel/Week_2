"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arr = ["anillo", "pulsera", "pendientes"];
var numeroCaracteresArr;
numeroCaracteresArr = (0, buclesFor_1.add)(arr);
console.log(numeroCaracteresArr);
console.log((0, condicionales_1.isEven)(numeroCaracteresArr));
