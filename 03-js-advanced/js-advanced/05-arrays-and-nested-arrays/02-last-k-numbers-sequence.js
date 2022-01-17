function lastKNumbersSequence(n, k){
    let Arr = [1];
    for(let i = 1; i < n; i++){
        let sum = 0;
        let sliced = Arr.slice(-k);
        sum = sliced.reduce((a, b) => a + b, 0);
        Arr.push(sum);
    }
    return Arr;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));

function lastKNumbersSequence(n, k) {
    let result = [1];

    for(let i=1; i<n; i++) {
        let startIndex = Math.max(0, i-k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));