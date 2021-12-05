const express = require("express");
const net = require("net");
const mongoose = require('mongoose');

const programs = require("../terence/models/program");

const app = express();
const port = process.env.PORT || 3000;
// const tcpport = 3001
// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect("mongodb+srv://admin:pa55w0rd123@cl-cluster.una2r.mongodb.net/2101?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/content'));

//Routes
app.use('/', require('./routes/challenge'));
app.use('/', require('./routes/project'));


// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});



const tcpport = 80;

const server2 = net.createServer();
server2.listen(tcpport, () => {
  console.log('TCP Server is running on port ' + tcpport + '.');
});

let sockets = [];

server2.on('connection', async function (sock) {
  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
  sockets.push(sock);

  sock.on('data', async function (data) {
    console.log('DATA ' + sock.remoteAddress + ': ' + data);
    const prg = await programs.find({}).sort({
      _id: -1
    }).limit(1);
    console.log(prg[0].commands)
    // Write the data back to all the connected, the client will receive it as data from the server
    sockets.forEach(function (sock, index, array) {
      sock.write(prg[0].commands);
      // sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
    });
  });

  // Add a 'close' event handler to this instance of socket
  sock.on('close', function (data) {
    let index = sockets.findIndex(function (o) {
      return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
    })
    if (index !== -1) sockets.splice(index, 1);
    console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
  });
});