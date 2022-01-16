function wordsUppercase(str) {
    let pattern = /\w+/g
    let match = str.match(pattern);
    let result = match.map(word => word.toUpperCase()).join(", ");
    console.log(result);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
