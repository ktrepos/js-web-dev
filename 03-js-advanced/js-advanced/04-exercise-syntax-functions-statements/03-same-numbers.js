function sameNums(input) {
const numToString = input.toString();
let sum = parseInt(numToString[0]);
let isSame = true;

for (let i = 1; i < numToString.length; i++) {
    sum += parseInt(numToString[i]);
    
    if (numToString[i] != numToString[i - 1]) {
        isSame = false;
    }
}

console.log(isSame);
console.log(sum);
    
}

sameNums(2222222);
sameNums(1234);
