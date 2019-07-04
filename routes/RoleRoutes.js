var express = require('express');
var router = express.Router();

var roleController = require('../controllers/RoleController')

router.get('/', roleController.role_list)

module.exports = router;