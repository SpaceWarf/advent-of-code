import { input } from './input';
import {
    solution1,
    solution2,
    getIds,
    getLowerHalf,
    getUpperHalf
} from './code';

describe('Day 5', () => {
    it('Puzzle 1 should return the result 996', () => {
        expect(solution1(input)).toEqual(996);
    });

    it('Puzzle 2 should return the result 671', () => {
        expect(solution2(input)).toEqual(671);
    });
});

describe('getIds', () => {
    it('Two boarding passes should return 2 ids', () => {
        expect(getIds(["BBFFBFBRLL", "FFFFBFBRLR"]).length).toEqual(2);
    });

    it('BBFFBFBRLL should return ', () => {
        expect(getIds(["BBFFBFBRLL"])[0]).toEqual(812);
    });

    it('FFFFBFBRLR should return ', () => {
        expect(getIds(["FFFFBFBRLR"])[0]).toEqual(45);
    });
});

describe('getLowerHalf', () => {
    it('Range 0,127 should return 0,63', () => {
        expect(getLowerHalf({ lower: 0, upper: 127 })).toEqual({ lower: 0, upper: 63 });
    });

    it('Range 0,128 should return 0,64', () => {
        expect(getLowerHalf({ lower: 0, upper: 128 })).toEqual({ lower: 0, upper: 64 });
    });
});

describe('getUpperHalf', () => {
    it('Range 0,127 should return 64,127', () => {
        expect(getUpperHalf({ lower: 0, upper: 127 })).toEqual({ lower: 64, upper: 127 });
    });

    it('Range 0,128 should return 64,127', () => {
        expect(getUpperHalf({ lower: 0, upper: 128 })).toEqual({ lower: 64, upper: 128 });
    });
});
