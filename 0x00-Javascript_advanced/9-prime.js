let primenum = true;
let count = 0;

function countPrimeNumbers() {
    let num;

    for (let i = 2; i < 101; i++) {
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                primenum = false;
                break;
            } else {
                count++;
            }
        }
    }

    return count;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (start - end) + ' milliseconds.');
