// app.js

// Import the 'http' module
const http = require('http');

// const PORT = 3000;

// Create a server that responds with "Hello, World!"
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        console.log('Someone hit the root path!');
    }

    res.statusCode = 200; // HTTP status code for OK
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World! iam 33444 \n'); // Send the response
});



// Listen on port 3000
server.listen(PORT, () => {
    console.log('Server running 33334444 : ', PORT);
});
