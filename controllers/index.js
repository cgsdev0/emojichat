let express = require('express');
let router = express.Router();

// GET / route
router.get('/', function(req, res) {
    console.log("Index");
    res.send("Index route!");
});

module.exports = router;