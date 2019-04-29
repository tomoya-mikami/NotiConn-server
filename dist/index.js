"use strict";
exports.__esModule = true;
var Express = require("express");
var event_1 = require("./handler/event");
var app = Express();
app.use('/event', event_1["default"]);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports["default"] = app;
