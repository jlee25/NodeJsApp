const express = require("express");
const controller = require('./controllers/controller')

const app = express();
const auth = require("./auth");

app.use(auth);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

controller(app);

app.listen(3000);
console.log('You are listening to port 3000');