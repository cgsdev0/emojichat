let express = require('express');
let router = express.Router();

// GET /login route
router.get('/', function(req, res) {
    console.log("Login");
    res.send("Login route!");
});

module.exports = router;