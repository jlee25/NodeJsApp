var fs = require("fs");

module.exports = function(app) {
  app.get('/', function(req, res){
    res.render("index");
  })

  app.get('/signin', function(req, res){
    res.render("signin");
  })

  app.get("/documents/:id", function(req, res){
    fs.readFile("./data.json", "utf-8", function(err, obj) {
      obj = JSON.parse(obj);
      if (obj.documents[req.params.id - 1] === undefined) {
        res.render("error")
      } else {
      res.render("paragraph", {id: req.params.id - 1, obj: obj})
      }
    });
  })
}