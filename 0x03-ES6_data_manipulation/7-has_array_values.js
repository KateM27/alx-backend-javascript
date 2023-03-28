export default function hasValuesFromArray(set, array) {
    let myArray = array.every(value => set.has(value));
    return myArray;
}
