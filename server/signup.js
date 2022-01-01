const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const { response } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const pool  = mysql.createPool({
    connectionLimit : 10,
    database        : 'prangon2.0',
    host            : 'localhost',
    user            : 'root',
    password        : ''
});



app.post('/register',(req, res)=>{

     const username = req.body.username
     const bracuId = req.body.bracuId
     const email = req.body.email
     const department = req.body.department
     const roll = req.body.roll
     const password = req.body.password

    pool.getConnection(function(err, connection) {
        console.log(err)
        connection.query("INSERT INTO users (Name, BRACU_Id, Email,Department, Password, Roll ) VALUES(?,?,?,?,?,?)",
        [username, bracuId, email,department, password, roll],

        (err, result) => {
            if(err){
                console.log(err)
                res.status(400).send(err);
                return;
            }
            res.status(200).json({
                status:200,
                success: true
            });
        });
        connection.release();
        });
        
});


app.get('/login',(req, res)=>{

    
    const bracuId = req.query.bracuId
    const password = req.query.password
    
    pool.getConnection(function(err, connection) {
        console.log(err)
        connection.query("SELECT * FROM users WHERE BRACU_Id=? AND Password=?",
        [bracuId, password],
    
        (err, result) => {
            if(err){
                console.log(err)
                res.status(400).send(err);
                return;
            }

            if (result.length>0){
                res.status(200).send(result);
            }

            else{
                res.send({messege:"User not found!"});
            }
                
        });
        connection.release();
    });

});



// app.delete('/login',(req, res)=>{

//     const username = req.query.username
//     const bracuId = req.query.bracuId
//     const email = req.query.email
//     const department = req.query.department
//     const roll = req.query.roll
//     const password = req.query.password

//    pool.getConnection(function(err, connection) {
//        console.log(err)
//        connection.query("DELETE * FROM users WHERE BRACU_Id='?'",
//        [bracuId],

//        (err, result) => {
//            if(err){
//                console.log(err)
//                res.status(400).send(err);
//                return;
//            }
//            res.status(200).json({
//                status:200,
//                success: true
//            });
//        });
//        connection.release();
//        });
       
// });

app.listen(3001, ()=>{
    console.log("running server")
});