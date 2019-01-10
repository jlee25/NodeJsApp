const auth = require("basic-auth");

const admins = { 
  diligen: { password: "hunter2" } };

module.exports = function(request, response, next) {
  var user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set("WWW-Authenticate", 'Basic realm="Diligen"');
    return response.status(401).send();
  }
  return next();
};
