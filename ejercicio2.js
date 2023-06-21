// Función que compruebe si un número es de Amstrong (número = suma de cada dígito elevado a la potencia del número de digitos)


let number;
let divisor = 1;
function amstrong(number) {
    for (let i = 1; i <= number.length; i++) {
        divisor = divisor * 10
        numResult = number % divisor
        for (j = 0; j < number.length; j++) {
            numIsAmstrong = numResult * numresult
        }
    }
    if (numIsAmstrong = number) {
        console.log("el numero es un número Amstrong")
    }

    else {
        console.log("el numero es un número Amstrong")
    }

}

//ejercicio resuelto en casa:

let numb = 140;
function isAmstrong() {
  let sum = 0;
  let pow;
  let numDigits = String(numb).length
  for (let i = 0; i < numDigits; i++) {
    let digit = parseInt(String(numb)[i]);
    pow=digit
    for (let j=1; j< numDigits; j++){
        pow =pow*digit       
    }
    sum = sum+pow  
  }
  console.log ("¿El número =",numb, " es la suma de dígitos elevados a:",numDigits, ", que es igual a", sum,"?") 
  if (sum === numb) {
    console.log("El número SÍ es un número de Armstrong");
  } else {
    console.log("El número NO es un número de Armstrong");
  }
}

isAmstrong(numb);