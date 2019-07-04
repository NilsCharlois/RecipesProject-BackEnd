var db = require('../models');

var Role = db.Role;

exports.role_list = (req,res)=>{
    Role.findAll()
    .then((roles) => {
        res.status(200).send(roles)
    })
}

exports.role_detail = (req,res)=>{
    res.send('NOT IMPLEMENTED')
}