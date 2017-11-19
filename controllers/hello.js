let express = require('express');
let router = express.Router();

router.get('/hello', function(req, res) {
    console.log("Hello world route");
    res.send("Hello world!");
});

module.exports = router;