const express = require("express");
const net = require("net");

const app = express();
const port = process.env.PORT || 3000;
const tcpport = 3001
// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/content'));

//Routes
app.use('/', require('./routes/login'));
app.use('/', require('./routes/project'));


// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

var server = net.createServer();
server.on('connection', handleConnection);


server.listen(tcpport, () => {
  console.log("TCP server listening to port " + tcpport, server.address())
})

  
function handleConnection(conn) {
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);

  conn.setEncoding('utf8');
  conn.on('data', onConnData);  
  conn.once('close', onConnClose);  
  conn.on('error', onConnError);

}

function onConnData(d) {  
  console.log('connection data from %s: %j', remoteAddress, d);
  if (d == "Hello"){
    
  }  
  conn.write(d);  
}
function onConnClose() {  
  console.log('connection from %s closed', remoteAddress);  
}
function onConnError(err) {  
  console.log('Connection %s error: %s', remoteAddress, err.message);  
}  