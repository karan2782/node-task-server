const http = require('http');
const fs = require('fs')

const home = fs.readFileSync('static/home.html', 'utf-8')
const about = fs.readFileSync('static/about.html', 'utf-8')
const contact = fs.readFileSync('static/contact.html', 'utf-8')

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write(home);
    } else if (req.url === '/about') {
        res.write(about);
    } else if (req.url === '/contact') {
        res.write(contact);
    }
    return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
