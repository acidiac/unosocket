// Application to demostrate integarting webapplication with serial port data from arduino over socket io
// Amit Chanchal amit.chanchal@hotmail.com

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var SerialPort = require("serialport");
var serialport = new SerialPort("/dev/tty.usbmodem1421");



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


serialport.on('open', function() {
    io.on('connection', function(socket) {
        serialport.on('data', function(data) {
            socket.emit("status", data[0]);
        });
    });

});

http.listen(3000, function() {
    console.log("app running on port 3000");
});