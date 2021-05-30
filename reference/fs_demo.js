// File System

const fs = require('fs')
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...')
});

// Create and write to file - overwrites
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File written to...')

    // appends - this is placed in the callback position
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.JS!', err => {
        if (err) throw err;
        console.log('File written to...')
    });
});

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
});

// Rename file

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_world.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed...')
});