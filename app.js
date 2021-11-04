const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/content'));

//Routes
app.use('/', require('./routes/login'));
app.use('/', require('./routes/project'));


// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});