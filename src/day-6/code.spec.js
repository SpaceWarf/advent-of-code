import { input } from './input';
import {
    solution1,
    solution2,
    getAnswers
} from './code';

describe('Day 6', () => {
    it('Puzzle 1 should return the result 6549', () => {
        expect(solution1(input)).toEqual(6549);
    });

    it('Puzzle 2 should return the result 3466', () => {
        expect(solution2(input)).toEqual(3466);
    });
});

describe('getAnswers', () => {
    it('Should return all answers from each answer set', () => {
        expect(getAnswers([
            "abc",
            "abcd",
            "cde",
            "",
            "bcd",
            "abc",
            "abdef"
        ])).toEqual([
            [['a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['c', 'd', 'e']],
            [['b', 'c', 'd'], ['a', 'b', 'c'], ['a', 'b', 'd', 'e', 'f']]
        ]);
    });
});