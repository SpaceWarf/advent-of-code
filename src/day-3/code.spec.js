import { input } from './input';
import {
    solution1,
    solution2
} from './code';

describe('Day 3', () => {
    it('Puzzle 1 should return the result 151', () => {
        expect(solution1(input, 1, 3)).toEqual(151);
    });

    it('Puzzle 2 should return the result 7540141059', () => {
        expect(solution2(input)).toEqual(7540141059);
    });
});
