export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve('Resolved');
  });
}

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);