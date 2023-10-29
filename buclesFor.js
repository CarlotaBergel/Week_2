var myArr1 = ["Anillo", "Collar", "Pulsera"];
var arrColor = ["verde", "rojo", "azul", "rosa"];
evenNumbers(10);
myRever(myArr1);
isRainbow2(arrColor);
console.log(add(arrColor));
function evenNumbers(num) {
    for (var i = 1; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
function myRever(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    return myArr;
}
function isRainbow2(myWords) {
    for (var i = 0; i < myWords.length; i++) {
        switch (myWords[i]) {
            case 'verde':
            case 'violeta':
            case 'naranja':
            case 'azul':
            case 'rojo':
            case 'amarillo':
                console.log(myWords[i] + ", si es del arcoiris");
                break;
            default:
                console.log(myWords[i] + ", no es del arcoiris");
                break;
        }
    }
}
function add(myWords) {
    var sumCarac = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumCarac += myWords[i].length;
    }
    return sumCarac;
}
