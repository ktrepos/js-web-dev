function stringsLengthCalculator(s1, s2, s3) {
    let totalLength = s1.length + s2.length + s3.length;
    let avgLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(avgLength);
}

stringsLengthCalculator('chocolate', 'ice cream', 'cake');
stringsLengthCalculator('pasta', '5', '22.3');