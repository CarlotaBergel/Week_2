let myArr1 = ["Anillo","Collar", "Pulsera"];
let arrColor = ["verde", "rojo","azul", "rosa"]


evenNumbers(10);

myRever(myArr1);

isRainbow2(arrColor);

console.log(add(arrColor));

function evenNumbers(num: number):void{

    for( let i = 1; i < num; i++){
        
        if(i % 2 != 0){       
            console.log(i)
        }
    }
}

function myRever(myArr: string[]){
    
    for (let i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    return myArr
}

function isRainbow2(myWords: string[]):void{
    
    for(let i = 0; i < myWords.length; i++){
        
        switch(myWords[i]){
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

function add(myWords: string[]){

    let sumCarac = 0;

    for(let i = 0; i < myWords.length; i++){
        sumCarac += myWords[i].length;
    }

    return sumCarac;
}


