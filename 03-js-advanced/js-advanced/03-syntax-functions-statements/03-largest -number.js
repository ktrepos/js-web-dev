function largestNum(a, b, c) {
    let result;

    if (a > b) {
        if (a > c) {
            result = a;
        } else {
            result = c;
        }
    } else if (b > c) {
        result = b;
    } else {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);

function largestNum(a, b, c) {
    let result;

    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);

function largestNum(a, b, c) {
    console.log(`The largest number is ${Math.max(a, b, c)}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);

function largestNum(...params) {
    console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);