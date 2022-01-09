function circleAreaCalculator (r) {
    if (typeof(r) == "number") {
        console.log((Math.PI * r ** 2).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }    
}

circleAreaCalculator(5);
circleAreaCalculator(false);