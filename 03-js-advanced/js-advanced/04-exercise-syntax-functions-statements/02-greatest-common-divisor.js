function greatestCommonDivisor(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
greatestCommonDivisor(5, 15);