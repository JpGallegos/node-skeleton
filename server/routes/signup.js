/**
 * Created by Jp on 4/11/15.
 */

// Include Express
var express = require('express');

// Initialize the Router
var router = express.Router();

// Setup the Route
router.post('/', function(req, res) {
    console.log(req.body);
    res.json({
        'msg': 'success!'
    });
});

// Expose the module
module.exports = router;