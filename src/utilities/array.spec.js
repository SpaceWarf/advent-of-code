import { areElementsUnique } from './arrays';

describe('areElementsUnique', () => {
    it('Should return false with non-unique elements', () => {
        expect(areElementsUnique([1, 2, 3, 4, 4])).toEqual(false);
    });

    it('Should return true with unique elements', () => {
        expect(areElementsUnique([1, 2, 3, 4, 5])).toEqual(true);
    });
});