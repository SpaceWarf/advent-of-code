import { input } from './input';
import {
    solution1,
    solution2,
    formatStringToPolicy,
    isPasswordValid1,
    isPasswordValid2
} from './code';

describe('Day 2', () => {
    it('Puzzle 1 should return the result 591', () => {
        expect(solution1(input)).toEqual(591);
    });

    it('Puzzle 2 should return the result 335', () => {
        expect(solution2(input)).toEqual(335);
    });
});

describe('formatStringToPolicy', () => {
    it('should format a policy string into a policy object', () => {
        expect(formatStringToPolicy("1-3 a: a1abbb")).toEqual({
            min: "1",
            max: "3",
            letter: "a",
            password: "a1abbb"
        });
    });
});

describe('isPasswordValid1', () => {
    it('a password with too many occurences should be invalid', () => {
        expect(isPasswordValid1({
            min: "1",
            max: "3",
            letter: "a",
            password: "a1aaa"
        })).toEqual(false);
    });

    it('a password with too little should be invalid', () => {
        expect(isPasswordValid1({
            min: "1",
            max: "3",
            letter: "a",
            password: "b1bbbb"
        })).toEqual(false);
    });

    it('a password with the maximum occurences should be valid', () => {
        expect(isPasswordValid1({
            min: "1",
            max: "3",
            letter: "a",
            password: "a1aabb"
        })).toEqual(true);
    });

    it('a password with the minimum occurences should be valid', () => {
        expect(isPasswordValid1({
            min: "1",
            max: "3",
            letter: "a",
            password: "b1abbb"
        })).toEqual(true);
    });
});

describe('isPasswordValid2', () => {
    it('a password with the letter at both positions should be invalid', () => {
        expect(isPasswordValid2({
            min: "1",
            max: "3",
            letter: "a",
            password: "a1abbb"
        })).toEqual(false);
    });

    it('a password with the letter at none of the positions should be invalid', () => {
        expect(isPasswordValid2({
            min: "1",
            max: "3",
            letter: "a",
            password: "b1bbbb"
        })).toEqual(false);
    });

    it('a password with the letter at the first position should be valid', () => {
        expect(isPasswordValid2({
            min: "1",
            max: "3",
            letter: "a",
            password: "a1bbbb"
        })).toEqual(true);
    });

    it('a password with the letter at the second position should be valid', () => {
        expect(isPasswordValid2({
            min: "1",
            max: "3",
            letter: "a",
            password: "b1abbb"
        })).toEqual(true);
    });
});
