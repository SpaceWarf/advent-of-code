import { input } from './input';
import {
    solution1,
    solution2,
    isFieldValid,
    getPassportStrings,
    getPassportObjects,
    isPassportValid1,
    isPassportValid2
} from './code';

describe('Day 4', () => {
    it('Puzzle 1 should return the result 210', () => {
        expect(solution1(input)).toEqual(210);
    });

    it('Puzzle 2 should return the result 131', () => {
        expect(solution2(input)).toEqual(131);
    });
});

describe('isFieldValid', () => {

    describe('byr', () => {
        it('too many characters should be invalid', () => {
            expect(isFieldValid("byr", "20202")).toEqual(false);
        });

        it('not enough characters should be invalid', () => {
            expect(isFieldValid("byr", "202")).toEqual(false);
        });

        it('above max should be invalid', () => {
            expect(isFieldValid("byr", "2021")).toEqual(false);
        });

        it('below min should be invalid', () => {
            expect(isFieldValid("byr", "1800")).toEqual(false);
        });

        it('all checks valid should be valid', () => {
            expect(isFieldValid("byr", "2000")).toEqual(true);
        });
    });

    describe('iyr', () => {
        it('too many characters should be invalid', () => {
            expect(isFieldValid("iyr", "20202")).toEqual(false);
        });

        it('not enough characters should be invalid', () => {
            expect(isFieldValid("iyr", "202")).toEqual(false);
        });

        it('above max should be invalid', () => {
            expect(isFieldValid("iyr", "2021")).toEqual(false);
        });

        it('below min should be invalid', () => {
            expect(isFieldValid("iyr", "1800")).toEqual(false);
        });

        it('all checks valid should be valid', () => {
            expect(isFieldValid("iyr", "2011")).toEqual(true);
        });
    });

    describe('eyr', () => {
        it('too many characters should be invalid', () => {
            expect(isFieldValid("eyr", "20202")).toEqual(false);
        });

        it('not enough characters should be invalid', () => {
            expect(isFieldValid("eyr", "202")).toEqual(false);
        });

        it('above max should be invalid', () => {
            expect(isFieldValid("eyr", "2031")).toEqual(false);
        });

        it('below min should be invalid', () => {
            expect(isFieldValid("eyr", "1800")).toEqual(false);
        });

        it('all checks valid should be valid', () => {
            expect(isFieldValid("eyr", "2021")).toEqual(true);
        });
    });

    describe('hcl', () => {
        it('too many characters should be invalid', () => {
            expect(isFieldValid("hcl", "#1234567")).toEqual(false);
        });

        it('not enough characters should be invalid', () => {
            expect(isFieldValid("hcl", "#12345")).toEqual(false);
        });

        it('no # should be invalid', () => {
            expect(isFieldValid("hcl", "123456")).toEqual(false);
        });

        it('invalid letter should be invalid', () => {
            expect(isFieldValid("hcl", "#12345g")).toEqual(false);
        });

        it('all checks valid should be valid', () => {
            expect(isFieldValid("hcl", "#123abc")).toEqual(true);
        });
    });

    describe('ecl', () => {
        it('not in array should be invalid', () => {
            expect(isFieldValid("ecl", "lbl")).toEqual(false);
        });

        it('in array should be invalid', () => {
            expect(isFieldValid("ecl", "blu")).toEqual(true);
        });
    });

    describe('pid', () => {
        it('too many characters should be invalid', () => {
            expect(isFieldValid("pid", "0123456789")).toEqual(false);
        });

        it('not enough characters should be invalid', () => {
            expect(isFieldValid("pid", "01234567")).toEqual(false);
        });

        it('all checks valid should be valid', () => {
            expect(isFieldValid("pid", "012345678")).toEqual(true);
        });
    });

    describe('hgt', () => {
        it('invalid unit should be invalid', () => {
            expect(isFieldValid("hgt", "123ft")).toEqual(false);
        });

        it('above cm max should be invalid', () => {
            expect(isFieldValid("hgt", "194cm")).toEqual(false);
        });

        it('below cm min should be invalid', () => {
            expect(isFieldValid("hgt", "149cm")).toEqual(false);
        });

        it('above in max should be invalid', () => {
            expect(isFieldValid("hgt", "77in")).toEqual(false);
        });

        it('below in min should be invalid', () => {
            expect(isFieldValid("hgt", "58in")).toEqual(false);
        });

        it('all checks valid with cm should be valid', () => {
            expect(isFieldValid("hgt", "155cm")).toEqual(true);
        });

        it('all checks valid with in should be valid', () => {
            expect(isFieldValid("hgt", "60in")).toEqual(true);
        });
    });

    describe('cid', () => {
        it('no value should be valid', () => {
            expect(isFieldValid("cid", null)).toEqual(true);
        });

        it('any value should be valid', () => {
            expect(isFieldValid("cid", "asdasd")).toEqual(true);
        });
    });
});


describe('getPassportStrings', () => {
    const inputStrs = [
        "iyr:2015",
        "hgt:59cm byr:2029 cid:219 pid:9381688753 eyr:1992 hcl:#b6652a",
        "ecl:#7a0fa6",
        "",
        "ecl:blu iyr:2018 pid:943614755 cid:335",
        "byr:1968",
        "eyr:2026"
    ];

    it('input with one empty line should return two passport strings', () => {
        expect(getPassportStrings(inputStrs)).toEqual([
            "iyr:2015 hgt:59cm byr:2029 cid:219 pid:9381688753 eyr:1992 hcl:#b6652a ecl:#7a0fa6",
            "ecl:blu iyr:2018 pid:943614755 cid:335 byr:1968 eyr:2026"
        ]);
    });
});

describe('getPassportObjects', () => {
    const passportStrs = [
        "iyr:2015 hgt:59cm byr:2029 cid:219 pid:9381688753 eyr:1992 hcl:#b6652a ecl:#7a0fa6",
        "ecl:blu iyr:2018 pid:943614755 cid:335 byr:1968 eyr:2026"
    ];

    it('two passport strings should return two passport objects', () => {
        expect(getPassportObjects(passportStrs)).toEqual([
            {
                iyr: "2015",
                hgt: "59cm",
                byr: "2029",
                cid: "219",
                pid: "9381688753",
                eyr: "1992",
                hcl: "#b6652a",
                ecl: "#7a0fa6"
            },
            {
                ecl: "blu",
                iyr: "2018",
                pid: "943614755",
                cid: "335",
                byr: "1968",
                eyr: "2026"
            }
        ]);
    });
});

describe('isPassportValid1', () => {
    it('missing required param should be invalid', () => {
        expect(isPassportValid1({
            iyr: "2015",
            hgt: "59cm",
            byr: "2029",
            cid: "219",
            pid: "9381688753",
            eyr: "1992",
            hcl: "#b6652a"
        })).toEqual(false);
    });

    it('missing optional param should be valid', () => {
        expect(isPassportValid1({
            iyr: "2015",
            hgt: "59cm",
            byr: "2029",
            pid: "9381688753",
            eyr: "1992",
            hcl: "#b6652a",
            ecl: "#7a0fa6"
        })).toEqual(true);
    });

    it('no missing params should be valid', () => {
        expect(isPassportValid1({
            iyr: "2015",
            hgt: "59cm",
            byr: "2029",
            cid: "219",
            pid: "9381688753",
            eyr: "1992",
            hcl: "#b6652a",
            ecl: "#7a0fa6"
        })).toEqual(true);
    });
});

describe('isPassportValid2', () => {
    it('missing required param should be invalid', () => {
        expect(isPassportValid2({
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('missing optional param should be valid', () => {
        expect(isPassportValid2({
            iyr: "2015",
            hgt: "159cm",
            byr: "2000",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(true);
    });

    it('no missing params should be valid', () => {
        expect(isPassportValid2({
            iyr: "2015",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(true);
    });

    it('invalid iyr should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid hgt should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "59cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid byr should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2020",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid pid should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "0123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid eyr should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2015",
            hcl: "#123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid iyr should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "123abc",
            ecl: "blu"
        })).toEqual(false);
    });

    it('invalid iyr should be invalid', () => {
        expect(isPassportValid2({
            iyr: "2000",
            hgt: "159cm",
            byr: "2000",
            cid: "219",
            pid: "123456789",
            eyr: "2025",
            hcl: "#123abc",
            ecl: "asd"
        })).toEqual(false);
    });
});