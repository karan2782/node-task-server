// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the requested URL
    let filePath = req.url;

    // Map URL paths to corresponding HTML files
    if (filePath === '/' || filePath === '/home') {
        filePath = '/home.html';
    } else if (filePath === '/about') {
        filePath = '/about.html';
    } else if (filePath === '/contact') {
        filePath = '/contact.html';
    }

    // Construct the full path to the static file
    const staticPath = path.join(__dirname, 'static', filePath);

    // Get the file extension and determine the MIME type
    const extname = String(path.extname(staticPath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    // Set the content type for the response, defaulting to 'application/octet-stream'
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read the requested file from the static directory
    fs.readFile(staticPath, (err, content) => {
        if (err) {
            // If the file is not found, serve the 404.html page
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname, 'static', '404.html'), (error, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404, 'utf-8');
                });
            } else {
                // For any other server error, send a 500 response
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+err.code+' ..\n');
            }
        } else {
            // If the file is found, send it with the correct content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Define the port for the server to listen on
const PORT = 3000;

// Start the server and log a message to the console
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
