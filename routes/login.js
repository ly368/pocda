let express = require('express');
let router = express.Router();
var connection = require('./db.js');
// var md5 = require('md5');

router.get('/',(req,res) =>{
    res.render('login');
});

router.post('/',(req,res) =>{
    let name = req.body.name;
    // let password =md5(req.body.pass);

    var query = "select name,password from tab_user where name = '"+name+"' and password = '"+password+"'";

    connection.query(query, (query, (err,results,fields) => {
        if(err){
            console.log(err);
            res.json({"status":-1});
            return;
        }
        res.json({"status":1});
    }))
})

module.exports = router;

