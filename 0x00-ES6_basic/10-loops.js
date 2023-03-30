// for of loop - iterate through an iterable(array, string)
export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array) {
    arr.push(appendString + value);
  }

  return arr;
}

// console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));