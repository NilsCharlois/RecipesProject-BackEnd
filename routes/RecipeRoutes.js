var express = require('express');
var router = express.Router();

var recipeController = require('../controllers/RecipeController')

router.get('/', recipeController.recipe_list)
router.get('/:id', recipeController.recipe_detail);

module.exports = router;