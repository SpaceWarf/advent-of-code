import { input } from './input';
import { findIntersection } from '../utilities/arrays';

export const solution1 = input => {
    return getAnswers(input)
        .map(group => new Set(group.reduce((answers, person) => [...answers, ...person])))
        .reduce((sum, set) => sum + set.size, 0);
};

export const solution2 = input => {
    return getAnswers(input)
        .reduce((sum, group) => sum + findIntersection(group).length, 0);
};

export const getAnswers = input => {
    let reduceIndex = 0;
    return input.reduce((groups, nextPerson) => {
        if (nextPerson === "") {
            reduceIndex++;
            groups[reduceIndex] = [];
        } else {
            groups[reduceIndex].push(nextPerson.split(""));
        }
        return groups;
    }, [[]]);
};

solution1(input); //?+
solution2(input); //?+