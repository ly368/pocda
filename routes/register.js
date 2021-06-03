let express = require('express');
let router = express.Router();
var connection = require('./db.js');
let User = require('./bean/User');
// var md5 = require('md5');

router.get('/',(req,res) =>{
    res.render('register');
});

router.post('/',(req,res) =>{
    let name = req.body.name;
    let password =md5(req.body.pass);
    
    var query = 'insert tab_user(name,password) values("'+name+'","'+password+'")';
    connection.query(query, (query, (err,results,fields) => {
        if(err){
            console.log(err);
            res.json({"status":-1});
            return;
        }
        res.json({"status":1});
    }))
    
})

module.exports = router ;