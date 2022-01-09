function sqareOfStars (input) {
    let row = "";
    if (!input) {
        for (let i = 0; i < 5; i++) {
            row += " *";                  
        }   
        for (let j = 0; j < 5; j++) {
            console.log(row); 
        }
    } else {
        for (let i = 0; i < input; i++) {
            row += " *";                  
        }   
        for (let j = 0; j < input; j++) {
            console.log(row); 
        }
    }    
}

sqareOfStars(1);
sqareOfStars(2);
sqareOfStars(5);
sqareOfStars();