export default function hasValuesFromArray(set, array) {
  const myArray = array.every((value) => set.has(value));
  return myArray;
}
