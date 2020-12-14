const fs = require("fs");

/**
 * --- Day 6: Custom Customs ---
 */

const answers = fs.readFileSync("day06.txt", "utf-8").split("\n\n");


function part1() {
    let count = 0;

    answers.forEach(answer => {
        let unique = answer
            .replace(/\n/g, '')
            .split('')
            .filter((item, i, arr) => arr.indexOf(item) === i);

        count += unique.length;
    })

    return count;
}



function part2() {
    let count = 0;


    answers.forEach(answer => {

        if (answer.includes('\n')) {
            let matchingAnswers = answer
                .split(/\n/)
                .map(item => item.split(''))
                .reduce((includ, current) =>
                    Array.from(new Set(includ.filter((a) => current.includes(a))))
                );

            return count += matchingAnswers.length
        } 
           
            return count += answer.split('').length
    })


    return count;
}

console.log(part1()); // 6903
console.log(part2()); // 3493