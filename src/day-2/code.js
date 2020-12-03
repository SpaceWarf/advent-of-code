import { input } from './input';

export const solution1 = input => {
    return input
        .map(str => formatStringToPolicy(str))
        .reduce((count, policy) => {
            return isPasswordValid1(policy)
                ? count + 1
                : count;
        }, 0); //?+
};

export const solution2 = input => {
    return input
        .map(str => formatStringToPolicy(str))
        .reduce((count, policy) => {
            return isPasswordValid2(policy)
                ? count + 1
                : count;
        }, 0); //?+
};

export const formatStringToPolicy = string => {
    const splitStr = string.split(/-| |: /g);
    return {
        min: splitStr[0],
        max: splitStr[1],
        letter: splitStr[2],
        password: splitStr[3]
    };
};

export const isPasswordValid1 = policy => {
    const letterOccurence = policy.password.split("").reduce((count, letter) => {
        return letter === policy.letter
            ? count + 1
            : count;
    }, 0);
    return letterOccurence >= policy.min && letterOccurence <= policy.max;
};

export const isPasswordValid2 = policy => {
    return !!(policy.password[policy.min - 1] === policy.letter ^ policy.password[policy.max - 1] === policy.letter);
};

solution1(input);
solution2(input);
