var db = require('../models');

var Recipe = db.Recipe;

exports.recipe_list = (req,res)=>{
    Recipe.findAll()
    .then((recipes) => {
        res.status(200).send(recipes)
    })
}

exports.recipe_detail = (req,res)=>{
    Recipe.findByPk(req.params.id)
    .then(recipe => {res.send(recipe)})
    .catch((error)=>res.send(`NOT IMPLEMENTED ${req.params.id}`))
}