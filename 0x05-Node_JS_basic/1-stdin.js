process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', () => {
  const input = process.stdin.read();

  if (input !== null) {
    console.log(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important sofware is now closing\n');
});
