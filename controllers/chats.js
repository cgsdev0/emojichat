let express = require('express');
let router = express.Router();

// GET /chat route
router.get('/', function(req, res) {
    console.log("Chat");
    res.send("Chat route!");
});

module.exports = router;