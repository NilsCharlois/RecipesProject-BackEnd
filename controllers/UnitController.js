var db = require('../models');

var Unit = db.Unit;

exports.unit_list = (req,res)=>{
    Unit.findAll()
    .then((units) => {
        res.status(200).send(units)
    })
}

exports.unit_detail = (req,res)=>{
    res.send('NOT IMPLEMENTED')
}