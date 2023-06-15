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