// const person = require('./person')
// common JS instead of ES6
// const Person = require('./person')
//
// ES6 way, but isn't supported in Node.js yet
// import { something } from '/person'
//
// const person1 = new Person('John Doe', 30);
// const person2 = new Person('Jane Doe', 20);
// const person3 = new Person('John Smith', 35);
// person1.greeting()
// person2.greeting()
// person3.greeting()
//
// console.log(person)
//
// const Logger = require('./logger');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    // if(req.url === '/'){
    //
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-type': 'text/html'})
    //         res.end(content);
    //     });
    // }
    //
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-type': 'text/html'})
    //         res.end(content);
    //     });
    // }
    //
    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'John Doe', age: 40}
    //     ];
    //
    //     res.writeHead(200, {'Content-type': 'application/json'});
    //     res.end(JSON.stringify(users));
    //
    //
    // }
    // console.log(req.url);

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // Extension of file
    let extName = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    // Check ext and set content type
    switch (extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200,{'Content-type': contentType});
            res.end(content, 'utf8');
        }
    })

    // console.log(filePath);
    // res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


