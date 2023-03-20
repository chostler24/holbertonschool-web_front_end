let count = 0;

function countPrimeNumbers() {
    let primenum;
    for (let i = 2; i < 101; i++) {
        primenum = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                primenum = false;
                break;
            }
        } if (primenum = true) {
            count++;
        }
    }

    return count;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (end - start) + ' milliseconds.');
