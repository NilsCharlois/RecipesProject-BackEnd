const Recipe = require('../../models').Recipe
module.exports = {
    create(req,res) {
        return Recipe.create({
            title:req.body.title,
            recommendedSteep: req.body.recommendedSteep
        })
        .then(recipe=> res.status(200).send(recipe))
        .catch(error=>res.status(400).send(error))
    }
}