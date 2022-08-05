// TODO: create a basic server with express - DONE
// that will send back the index.html file on a GET request to '/' - DONE
// it should then send back jsonData on a GET to /data - DONE

// **** SOLUTION WITH PATH ***
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

var jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/data', (req, res) => {
    res.json(jsonData);
})

app.listen(port);
console.log(`Server started at http://localhost:${port}`);