const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', function (req, res) {
    res.status(200).send("hello")
});

server.listen("8000", function () {
    console.log("Listening on port 8000");
});