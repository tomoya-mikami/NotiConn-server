"use strict";
exports.__esModule = true;
var Express = require("express");
var router = Express.Router();
router.get('/', function (req, res) {
    res.json({
        message: "see you!"
    });
});
exports["default"] = router;
