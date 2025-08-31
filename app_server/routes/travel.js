var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/travel');

// GET travel page
router.get('/', ctrlTravlr.travel);

module.exports = router;
