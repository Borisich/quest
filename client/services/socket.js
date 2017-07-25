var io = require('socket.io-client');

var socket = io('http://localhost');

module.exports = socket;
