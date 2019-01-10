const express = require("express");
const controller = require('./controllers/controller')

const app = express();
const auth = require("./auth");

app.use(auth);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

controller(app);

const server = app.listen(process.env.PORT || 5000, function() {
  const port = server.address().port;
  console.log("Express is working on port " + port);
});