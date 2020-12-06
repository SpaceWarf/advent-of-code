export const areElementsUnique = (array) => {
    return array.every((value, index, self) => self.indexOf(value) === index);
}

export const findIntersection = (arrays) => {
    return arrays.reduce((intersection, array) => intersection.filter(value => array.includes(value)));
}