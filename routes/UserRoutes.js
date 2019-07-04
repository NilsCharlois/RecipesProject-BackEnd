var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController')

router.get('/', userController.user_list)

module.exports = router;