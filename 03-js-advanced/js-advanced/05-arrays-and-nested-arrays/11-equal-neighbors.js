function solve(args) {
    let counter = 0;
  
    for (let index = 0; index < args.length-1; index++) {  
        for (let j = 1; j < args[index].length; j++) {  
            if(args[index][j] == args[index+1][j]){  
                counter++;  
            }  
            if(args[index][j] == args[index][j - 1]){  
                counter++;  
            }  
        }  
    }
  
    for (let index = 0; index < args[args.length-1].length; index++) {
        if(args[args.length-1][index] == args[args.length-1][index + 1]){
            counter++;  
        }  
    }
  
    for (let index = 0; index < args.length-1; index++) {  
        if(args[index][0] == args[index+1][0]){
            counter++;  
        }  
    }
  
    console.log(counter)
  
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);


function solve(matrix) {

    const result = matrix.reduce((acc, currRow, rowIndex) => {
        // return currenCount also possible
        const currentCount = currRow.reduce((acc, currItem, itemIndex) => {
            if (currItem === currRow[itemIndex + 1]) {
                acc += 1;
            }
            // if matrix[rowIndex + 1] is undefined return empty array
            // will throw TypeError if attempting to take element from undefined
            if (currItem === (matrix[rowIndex + 1] || [])[itemIndex]) {
                acc += 1;
            }
            return acc;
        }, 0);
        // console.log(count);
        return acc + currentCount;
    }, 0);

    console.log(result);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);