function arrangeNumbers(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num);            
        } else {
            result.push(num);
        }
    }
    console.log(result.join("\n"));
}

arrangeNumbers([7, -2, 8, 9]);
arrangeNumbers([3, -2, 0, -1]);