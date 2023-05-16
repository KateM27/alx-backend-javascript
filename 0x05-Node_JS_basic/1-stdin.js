// function readInput(promptText, callback) {
//     process.stdout.write(promptText);
  
//     process.stdin.setEncoding('utf8');
  
//     process.stdin.on('data', (data) => {
//       callback(data.trim());
//       process.stdin.pause();
//     });
  
//     process.stdin.resume();
//   }
  
//   // Example usage
//   readInput('Welcome to Holberton School, what is your name? ', (input) => {
//     console.log(`Your name is: ${input}`);
//   });


  function readInput(promptText, exitKeyword, exitMessage, callback) {
    process.stdout.write(promptText);
  
    process.stdin.setEncoding('utf8');
  
    process.stdin.on('data', (data) => {
      const input = data.trim();
      
      if (input === exitKeyword) {
        console.log(exitMessage);
        process.stdout.write('\n');
        process.exit();
      }
  
      callback(input);
      process.stdin.pause();
    });
  
    process.stdin.resume();
  }
  
  // Example usage
  readInput('Welcome to HS, what is your name?', 'This important software is now closing', (input) => {
    console.log(`Your name is: ${input}!`);
  });
    