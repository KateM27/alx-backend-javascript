// import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (err) {
    queue.push(`Error: ${err.message}`, 'Guardrail was processed');
  }
  return queue;
}

// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));