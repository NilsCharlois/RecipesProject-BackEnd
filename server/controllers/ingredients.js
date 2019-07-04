const Ingredient = require('../../models').Ingredient
module.exports = {
    create(req,res) {
        return Ingredient.create({
            name:req.body.name,
            url: req.body.url,
            image: req.body.image
        })
        .then(ingredient=> res.status(200).send(ingredient))
        .catch(error=>res.status(400).send(error))
    }
}