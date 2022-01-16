function prevDay(year, month, day) {
    let dateStr = year + "-" + month + "-" + day;
    let event = new Date(dateStr);
    event.setDate(day - 1);
    console.log(event.getFullYear() + `-` + (Number(event.getMonth()) + 1) + `-` + event.getDate());
}

prevDay(2016, 9, 30);
prevDay(2016, 10, 1);


function solve(year, month, date){
    let randomDate = new Date(year, month - 1, date);
    randomDate.setDate(date - 1);
    console.log(`${randomDate.getFullYear()}-${randomDate.getMonth() + 1}-${randomDate.getDate()}`);
    
}

solve(2016, 9, 30);
solve(2016, 10, 1);