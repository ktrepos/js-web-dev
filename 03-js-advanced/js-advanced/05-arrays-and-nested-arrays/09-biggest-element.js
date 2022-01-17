function biggestEl(matrix) {
    let myArr = [];
    for (let row of matrix) {
        for (let col of row) {
            myArr.push(col);            
        }
    } 
    
    let ascending = myArr.sort((a, b) => a - b);
    let biggest = myArr[myArr.length - 1];
    return biggest;
}

console.log(biggestEl([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));




//i tazi dava 100 proc v judge
function solve(arr){
let biggest = Number.MIN_SAFE_INTEGER;

    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr[i].length; j++) {
            if(biggest <= arr[i][j]) {
                biggest = arr[i][j];
            }
        }
    }         
 
	return biggest;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));

