function evenPositions(strings) {
    let result = "";

    for (let index = 0; index < strings.length; index++) {
        if (index % 2 == 0) {
            result += strings[index];
            result += " ";            
        }        
    }

    console.log(result);
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);

function evenPositions(strings) {
    let result = "";

    for (let index = 0; index < strings.length; index +=2) {
        result += strings[index];
        result += " ";     
    }

    console.log(result);
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);

function evenPositions(strings) {
    let result = [];

    for (let index = 0; index < strings.length; index +=2) {
        //empty array adds each value changing its length
        result [result.length] = strings[index];             
    }

    console.log(result.join(" "));
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);