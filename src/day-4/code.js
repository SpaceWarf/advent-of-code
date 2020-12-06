import { input } from './input';

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const fieldValidation = {
    "byr": {
        digitCount: 4,
        min: 1920,
        max: 2002
    },
    "iyr": {
        digitCount: 4,
        min: 2010,
        max: 2020
    },
    "eyr": {
        digitCount: 4,
        min: 2020,
        max: 2030
    },
    "hgt": {
        regex: /^(\d*)(cm|in)$/,
        intervalIfMatch: {
            "cm": {
                min: 150,
                max: 193
            },
            "in": {
                min: 59,
                max: 76
            }
        }
    },
    "hcl": {
        regex: /^#[0-9a-f]{6}$/
    },
    "ecl": {
        oneOf: ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
    },
    "pid": {
        regex: /^[0-9]{9}$/
    },
    "cid": {}
};

export const solution1 = input => {
    return getPassportObjects(getPassportStrings(input))
        .reduce((count, nextPassport) => {
            return isPassportValid1(nextPassport)
                ? count + 1
                : count;
        }, 0);
};

export const solution2 = input => {
    return getPassportObjects(getPassportStrings(input))
        .reduce((count, nextPassport) => {
            return isPassportValid2(nextPassport)
                ? count + 1
                : count;
        }, 0);
};

export const getPassportStrings = input => {
    let reduceIdx = 0;
    return input.reduce((acc, nextStr) => {
        if (nextStr === "") {
            reduceIdx++;
            acc[reduceIdx] = "";
            return acc;
        } else {
            acc[reduceIdx] = acc[reduceIdx] === ""
                ? nextStr
                : `${acc[reduceIdx]} ${nextStr}`
            return acc;
        }
    }, [""]);
};

export const getPassportObjects = passportStrings => {
    return passportStrings
        .map(string => string.split(" "))
        .map(splitStr => {
            const passportObj = {};
            splitStr.forEach(part => {
                const splitPart = part.split(":");
                passportObj[splitPart[0]] = splitPart[1];
            });
            return passportObj;
        });
};

export const isPassportValid1 = passport => {
    return requiredFields.every(field => Object.keys(passport).includes(field));
};

export const isPassportValid2 = passport => {
    return isPassportValid1(passport)
        && Object.keys(passport).every(key => {
            return isFieldValid(key, passport[key]);
        });
};

export const isFieldValid = (field, value) => {
    const validator = fieldValidation[field];
    const checksValidity = [];

    if (validator.regex) {
        checksValidity.push(validator.regex.test(value));

        if (validator.intervalIfMatch) {
            const result = value.match(validator.regex);

            if (!result) {
                return false;
            }

            const interval = validator.intervalIfMatch[result[2]];
            checksValidity.push(parseInt(result[1]) >= interval.min && parseInt(result[1]) <= interval.max);
        }
    }

    if (validator.oneOf) {
        checksValidity.push(validator.oneOf.includes(value));
    }

    if (validator.digitCount) {
        checksValidity.push(value.length === validator.digitCount);
    }

    if (validator.min) {
        checksValidity.push(!isNaN(value) && parseInt(value) >= validator.min);
    }

    if (validator.max) {
        checksValidity.push(!isNaN(value) && parseInt(value) <= validator.max);
    }

    return checksValidity.every(check => check);
};

solution1(input); //?+
solution2(input); //?+
