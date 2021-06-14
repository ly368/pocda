var express = require('express');
var router = express.Router();
var db=require('./db');


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "123456",
    database: "work"
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from detail_add",(err,result)=>{
    res.render('add', { data:result});
  })
});
/* GET home page of alter. */
// router.get('/alter/:id',(req, res)=> {
//   db.queryParam("select * from detail_add where id =?",[req.params.id],(err,result) =>{
//   res.render('alter',{obj:result[0]});
//   })
// });

//查询
router.post('/',(req,res)=>{
  db.queryParam("select * from detail_add where id like ? or title like ? or subtitle like ? or detail like ?",[req.body.search,req.body.search,req.body.search,req.body.search],(err,result)=>{
      res.render('add', { data:result});
    });
});
//修改
// router.post('/alter',(req,res)=>{
//   db.queryParam("update detail_add set title=?,subtitle=?,detail=?,photo=? where id=?",[req.body.title,req.body.subtitle,req.body.detail,req.body.photo,req.params.id],(err,result)=>{
//     if(err){
//       console.log(err);

//     }else{
//       res.redirect('/add');
//   }
//   });
// })
//删除
router.get('/del/:id',(req,res) => {
  db.queryParam("delete from detail_add where id=?",[req.params.id],(err,result)=>{
      res.redirect('/add')
    })
  });




module.exports = router;