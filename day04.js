const fs = require('fs');

const passports = fs.readFileSync("day04.txt", "utf-8", (err, data) => {
    if (err) throw err; 
    return data.toString()
}).split("\n\n")

let validPassports = 0;

passports.map(passport => {
    const passportDetails = {
        'ecl': /((?<=ecl:).*?(?=\s|$))/.exec(passport) && /((?<=ecl:).*?(?=\s|$))/.exec(passport)[0],
        'pid': /((?<=pid:).*?(?=\s|$))/.exec(passport) && /((?<=pid:).*?(?=\s|$))/.exec(passport)[0],
        'eyr': /((?<=eyr:).*?(?=\s|$))/.exec(passport) && /((?<=eyr:).*?(?=\s|$))/.exec(passport)[0],
        'hcl': /((?<=hcl:).*?(?=\s|$))/.exec(passport) && /((?<=hcl:).*?(?=\s|$))/.exec(passport)[0],
        'byr': /((?<=byr:).*?(?=\s|$))/.exec(passport) && /((?<=byr:).*?(?=\s|$))/.exec(passport)[0],
        'iyr': /((?<=iyr:).*?(?=\s|$))/.exec(passport) && /((?<=iyr:).*?(?=\s|$))/.exec(passport)[0],
        'cid': /((?<=cid:).*?(?=\s|$))/.exec(passport) && /((?<=cid:).*?(?=\s|$))/.exec(passport)[0],
        'hgt':  /((?<=hgt:).*?(?=\s|cm|in|$))/.exec(passport) && /((?<=hgt:).*?(?=\s|$))/.exec(passport)[0],
    }

    const { ecl, pid, eyr, hcl, byr, cid, iyr, hgt } = passportDetails;
    if ( !ecl || !pid || !eyr || !hcl || !byr || !iyr || !hgt ) return;

    // PART 2: passport validation
    if (validatePassport(ecl, pid, eyr, hcl, byr, iyr, hgt)) validPassports++
})

function validatePassport(ecl, pid, eyr, hcl, byr, iyr, hgt) {
    const hairColorRegex = /(?<=\#)[\da-fA-F]{6}/;

    if (parseInt(byr) < 1920 || parseInt(byr) > 2002) return false
    if (parseInt(iyr) < 2010 || parseInt(iyr) > 2020) return false;
    if (parseInt(eyr) < 2020 || parseInt(eyr) > 2030) return false;
    if (pid.match(/^[0-9]{9}$/) == null) return false;
    if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl)) return false;
    if (!hairColorRegex.test(hcl)) return false;

    if(hgt.includes("cm")) {
        let height = hgt.split("cm");
        height = height[0];
        if (parseInt(height) < 150 || parseInt(height) > 193) return false;
    } else if (hgt.includes("in")) {
        let height = hgt.split("in");
        height = height[0];
        if (parseInt(height) < 59 || parseInt(height) > 76) return false;
    } else {
        return false;
    }

    return true;
}

console.log(validPassports);

