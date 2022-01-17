function sumFirstLast(strings) {
    const first = Number(strings.shift());
    const last = Number(strings.pop());
    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
