const express = require("express");
const controller = require('./controllers/controller')

const app = express();
const auth = require("./auth");

app.use(auth);

app.locals.highlight = () => {
  var text = document.getElementById("query").value;
  var query = new RegExp("(\\b" + text + "\\b)", "gim");
  var e = document.getElementById("searchtext").innerHTML;
  var enew = e.replace(/(<span>|<\/span>)/gim, "");
  document.getElementById("searchtext").innerHTML = enew;
  var newe = enew.replace(query, "<span>$1</span>");
  document.getElementById("searchtext").innerHTML = newe;
  console.log("hello");
}

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

controller(app);

const server = app.listen(process.env.PORT || 5000, function() {
  const port = server.address().port;
  console.log("Express is working on port " + port);
});

app.listen(3000);