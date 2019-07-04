var db = require('../models');

var Ingredient = db.Ingredient;

exports.ingredient_list = (req,res)=>{
    Ingredient.findAll()
    .then((ingredients) => {
        res.status(200).send(ingredients)
    })
}

exports.ingredient_detail = (req,res)=>{
    Ingredient.findByPk(req.params.id)
    .then(ingredient => {res.send(ingredient)})
    .catch((error)=>res.send(`NOT IMPLEMENTED ${req.params.id}`))
}