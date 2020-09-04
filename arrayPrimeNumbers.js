function isPrime(val) {
    for (let i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return val > 1;
}

function primeNumbers(arr) {
    isArray = false;
    negativeArray = false;
    primeNumbersArray = [];

    if (Array.isArray(arr)) {
        isArray = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                negativeArray = true;
                console.log('Array must contain positive numbers only.');
                break;
            } else {
                if (Number.isInteger(arr[i])) {
                    if (isPrime(arr[i])) {
                        primeNumbersArray.push(arr[i]);
                    } else {
                        console.log(arr[i] + ' is not a prime number.');
                    }
                } else {
                    console.log('Array contains non-integers.');
                    break;
                }
            }
        }
    } else {
        isArray = false;
        console.log('Argument is not an array.');
    }

    return primeNumbersArray;
}
