import { input } from './input';
import { solution1, solution2 } from './code';

describe('Day 1', () => {
    it('Puzzle 1 should return the result 1010884', () => {
        expect(solution1(input)).toEqual({
            first: 914,
            second: 1106,
            result: 1010884
        });
    });

    it('Puzzle 2 should return the result 253928438', () => {
        expect(solution2(input)).toEqual({
            first: 661,
            second: 958,
            third: 401,
            result: 253928438
        });
    });
});
