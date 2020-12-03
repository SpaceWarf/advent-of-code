import { input } from './input';

export const solution1 = (input, downModifier, rightModifier) => {
    const squarePerLine = input[0].length;
    let rightPos = 0;
    let downPos = 0;
    let treeCounter = 0;

    while (downPos < input.length) {
        treeCounter += input[downPos][rightPos % squarePerLine] === "#"
            ? 1 : 0;
        rightPos += rightModifier;
        downPos += downModifier;
    }

    return treeCounter; //?+
};

export const solution2 = input => {
    return solution1(input, 1, 1)
        * solution1(input, 1, 3)
        * solution1(input, 1, 5)
        * solution1(input, 1, 7)
        * solution1(input, 2, 1) //?+
};

solution1(input, 1, 3);
solution2(input);
