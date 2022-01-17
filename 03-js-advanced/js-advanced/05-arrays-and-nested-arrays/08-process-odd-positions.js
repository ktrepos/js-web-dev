// ot prezentaciata
function processOddPos(arr) {
    return arr.filter((a, i) => i % 2 !== 0)    
    .map(x => x * 2)    
    .reverse()    
    .join(' ');    
}

console.log(processOddPos([10, 15, 20, 25]));
console.log(processOddPos([3, 0, 10, 4, 7, 3]));

//ot Viktor
function processOddPos(arr) {
    const oddNumbers = arr.filter((a, i) => i % 2 == 1);  
    const doubled = oddNumbers.map(x => x * 2);    
    doubled.reverse();    
    console.log(doubled.join(" "));
}

processOddPos([10, 15, 20, 25]);
processOddPos([3, 0, 10, 4, 7, 3]);
