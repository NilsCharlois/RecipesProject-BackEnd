var express = require('express');
var router = express.Router();

var ingredientController = require('../controllers/IngredientController')

router.get('/', ingredientController.ingredient_list)
router.get('/:id', ingredientController.ingredient_detail);

module.exports = router;