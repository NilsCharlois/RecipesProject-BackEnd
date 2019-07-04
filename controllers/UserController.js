var db = require('../models');

var User = db.User;

exports.user_list = (req,res)=>{
    User.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
}

exports.user_detail = (req,res)=>{
    res.send('NOT IMPLEMENTED')
}