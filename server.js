const rateLimit = require("express-rate-limit");
var express = require("express");
var app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 request per  15 minutes
  message: "Too many requests",
});

function customRateLimit(req, res, next) {
  if (req.path === "/Admin") {
    limiter(req, res, next);
  } else {
    next();
  }
}

app.get("/", function (req, res) {
  res.send("Express-Rate-Limit!");
});

app.get("/Admin", customRateLimit, function (req, res) {
  res.send("Admin Page!");
});

app.listen(port, function () {
  console.log("Web server listening on port " + port);
});
