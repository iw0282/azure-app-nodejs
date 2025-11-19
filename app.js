// app.js

// Import the 'http' module
const http = require('http');

// Create a server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code for OK
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!\n'); // Send the response
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
