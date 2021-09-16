'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';
let visit = 0;

const app = express();
app.get('/', (req, res) => {
    visit++
    console.log(`CLIENT ${visit} CONNECTED`)
    res.send(`<h1>Hello from nodejs, you are the visitor : ${visit}</h1>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);