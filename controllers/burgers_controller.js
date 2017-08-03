var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function() {
        res.redirect("/");
    });
});
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: true,
    }, condition, function() {
        res.redirect("/");
    });
});
router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function() {
        res.redirect("/");
    });
});
// Export routes for server.js to use.
module.exports = router;