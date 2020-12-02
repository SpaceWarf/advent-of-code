export const areElementsUnique = (array) => {
    return array.every((value, index, self) => self.indexOf(value) === index);
}