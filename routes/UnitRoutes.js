var express = require('express');
var router = express.Router();

var unitController = require('../controllers/UnitController')

router.get('/', unitController.unit_list)

module.exports = router;