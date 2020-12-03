import { input } from './input';
import { areElementsUnique } from '../utilities/arrays';

export const solution1 = input => {
    const result = {
        first: null,
        second: null,
        result: null
    };

    input.forEach((num1, index1) => {
        const match = input.find((num2, index2) => {
            return index1 !== index2 && num1 + num2 === 2020;
        });

        if (match) {
            result.first = num1;
            result.second = match
            result.result = num1 * match;
        }
    });

    return result; //?+
};

export const solution2 = input => {
    const result = {
        first: null,
        second: null,
        third: null,
        result: null
    };

    input.forEach((num1, index1) => {
        input.forEach((num2, index2) => {
            const match = input.find((num3, index3) => {
                return areElementsUnique([index1, index2, index3])
                    && num1 + num2 + num3 === 2020;
            });

            if (match) {
                result.first = num1;
                result.second = num2;
                result.third = match;
                result.result = num1 * num2 * match;
            }
        });
    });

    return result; //?+
};

solution1(input);
solution2(input);