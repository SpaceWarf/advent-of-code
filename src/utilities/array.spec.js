import { areElementsUnique, findIntersection } from './arrays';

describe('areElementsUnique', () => {
    it('Should return false with non-unique elements', () => {
        expect(areElementsUnique([1, 2, 3, 4, 4])).toEqual(false);
    });

    it('Should return true with unique elements', () => {
        expect(areElementsUnique([1, 2, 3, 4, 5])).toEqual(true);
    });
});

describe('findIntersection', () => {
    it('No shared elements should return empty array', () => {
        expect(findIntersection([
            [1, 2, 3, 4, 5],
            [6, 7, 8],
            [9, 10, 11, 12]
        ])).toEqual([]);
    });

    it('Should return true with unique elements', () => {
        expect(findIntersection([
            [1, 2, 3, 4, 5],
            [1, 3, 5],
            [1, 8, 2, 5]
        ])).toEqual([1, 5]);
    });
});