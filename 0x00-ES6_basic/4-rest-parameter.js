// Rest operator - when you don't know how many values are being passed
export default function returnHowManyArguments(...args) {
  return args.length;
}

// let solution = returnHowManyArguments("Hello", "Holberton", 2023);
// console.log(solution); 