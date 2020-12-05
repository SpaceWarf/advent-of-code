import { input } from './input';

export const solution1 = input => {
    return Math.max(...getIds(input));
};

export const solution2 = input => {
    const ids = getIds(input);
    let match;
    for (let i = 0; i < 127 * 7; i++) {
        if (!ids.includes(i) && ids.includes(i - 1) && ids.includes(i + 1)) {
            match = i;
        }
    }
    return match
};

export const getIds = input => {
    return input.map(seat => {
        let rowBounds = { lower: 0, upper: 127 };
        let colBounds = { lower: 0, upper: 7 };
        seat.split("").forEach(part => {
            switch (part) {
                case "F":
                    rowBounds = getLowerHalf(rowBounds);
                    break;
                case "B":
                    rowBounds = getUpperHalf(rowBounds);
                    break;
                case "L":
                    colBounds = getLowerHalf(colBounds);
                    break;
                case "R":
                    colBounds = getUpperHalf(colBounds);
                    break;
            }
        });
        return (rowBounds.lower * 8) + colBounds.lower;
    });
}

export const getLowerHalf = bounds => {
    return {
        lower: bounds.lower,
        upper: Math.floor((bounds.lower + bounds.upper) / 2)
    };
};

export const getUpperHalf = bounds => {
    return {
        lower: Math.ceil((bounds.lower + bounds.upper) / 2),
        upper: bounds.upper
    }
};

solution1(input); //?+
solution2(input); //?+
