import { createServer } from 'http';

const port = 1245;
const app = createServer();

app.on((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
