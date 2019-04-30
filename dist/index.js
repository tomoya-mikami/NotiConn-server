"use strict";
exports.__esModule = true;
var Express = require("express");
var event_1 = require("./handler/event");
var app = Express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("allow cors");
    next();
});
app.use('/event', event_1["default"]);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports["default"] = app;
