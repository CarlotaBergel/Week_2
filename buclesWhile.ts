let nombres = ["Naila", "Nyan", "Eiden"];
let numVariados = [1,2,3,4,5,6,7,8,9,10,11];

starWithM(nombres);

hasEven(numVariados);

function hasEven(myNums: number[]):void{
    
    let contador = 0;
    while (contador < myNums.length){
          
        if(myNums[contador] % 2 == 0){
            console.log(myNums[contador]);
        }

        contador++;
    }   
}

function starWithM(myNames: string[]):void{

    let finArr = 0;
    let cumple = true;
    while (finArr < myNames.length && cumple){
        
        if(!myNames[finArr].startsWith('M')){
            cumple = false;
        }
        finArr++;
    }

    console.log(cumple);
}

