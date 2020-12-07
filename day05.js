const fs = require("fs");

const seats = fs.readFileSync("day05.txt", "utf-8").split("\n");
const seatIDS = [];

seats.map(seat => {
    const letters = seat.split("");
    const rows = [0, 127]
    const columns = [0, 7]
    let row = 0;
    let column = 0;

    letters[0] === "F" ? rows[1] = Math.floor(rows[1] / 2) : rows[0] = Math.floor(rows[1] / 2);

    for (let i = 1; i < 6; i++) {
        letters[i] === "B" ? rows[0] = Math.floor(rows[0] + ((rows[1] - rows[0]) / 2)) : rows[1] = Math.floor(rows[1] - ((rows[1] - rows[0]) / 2));
    }
    letters[6] === "B" ? row = rows[0] - 1: row = rows[1] - 1
    
    
    letters[7] === "R" ? columns[0] = Math.floor(columns[1] / 2) : columns[1] = Math.floor(columns[1] / 2);
    letters[8] === "R" ? columns[0] = Math.floor(columns[0] + ((columns[1] - columns[0]) / 2 )) : columns[1] = Math.floor(columns[1] - ((columns[1] - columns[0]) / 2 ));
    letters[9] === "R" ? column = columns[1] : column = columns[1] - 1;

    seatIDS.push(row * 8 + column);
})


// Part 1
//  Get biggest seat ID
console.log(Math.max(...seatIDS)); 
// console.log(seatIDS.length + 1);