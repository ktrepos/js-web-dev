function solve(i1, i2, i3, i4, i5, i6) {
    let num = Number(arguments[0]);
 
    for (let i = 1; i < arguments.length; i++) {
 
        if (arguments[i] === 'chop') {
            num = num / 2;
            console.log(num);
        }
        else if (arguments[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (arguments[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (arguments[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else  {
            num = num - 0.20 * num;
            console.log(num);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');