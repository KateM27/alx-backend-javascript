const
    express = require('express')
    app = express()
    port = 1245
    host = '127.0.0.1'

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
});
