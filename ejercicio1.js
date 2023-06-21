//DESCRIPCIÓN: Escribe una función que dado un array de 10 numeros, devuelva un array con los primos en primer lugar y después el resto


let numbers = [];
const primos = [];
function primos() {
    for (let i = 0; i < 10; i++) {
        for (let j = 1; i < 10; j++){
            if (numbers[i] % j === 0) {
                primos.push(numbers[i]);
            }
        }

    }
    numbers=primos
}


//ejercicio resuelto en casa:

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayPrimos = [];
let isPrimo;
function primos(numbers) {
    
    for (let i = 0; i < 10; i++) {
        isPrimo = true;

        for (let j = 2; j < number[i]; j++) {
            if (number[i] % j === 0) {
                isPrimo = false;
            }   

        }
        if (isPrimo===true) {
            arrayPrimos.unshift(number[i]);     
        } else {
            arrayPrimos.push(number[i]);
        }
        
    //console.log(i, "numero", numbers[i], "j=", j, arrayPrimos);
    console.log(arrayPrimos);
    
    } 
}        

primos(numbers);
