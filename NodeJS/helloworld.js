/**
 * Adapted from: https://nodejs.org/en/docs/guides/getting-started-guide/
 *
 * Run your web server using 'node helloworld.js', visit http://localhost:3000, and you will see a message 'Hello World'
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});