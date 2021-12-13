const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


const pool  = mysql.createPool({
    connectionLimit : 10,
    database        : 'prangon',
    host            : 'localhost',
    user            : 'root',
    password        : ''
});


app.get('/chathead', (req, res) => {
    pool.getConnection(function(err, connection) {
        console.log(err)
        connection.query(`SELECT * FROM users;`,
        (err, result) => {
            if(err){
                console.log(err)
                res.status(400).send(err);
                return;
            }else{
            res.json(result)
            }
        });
        connection.release();
    });
    
});

app.get('/messagelist', (req, res) => {
    pool.getConnection(function(err, connection) {
        console.log(err)
        console.log(req)
        connection.query(`SELECT * FROM message WHERE convo_id = ${req.query.id};`,
        (err, result) => {
            if(err){
                console.log(err)
                res.status(400).send(err);
                return;
            }else{
            res.send(result)
            }
        });
        connection.release();
    });
});

app.post('/sendtext', (req, res) => {
    const convo_id = req.body.convo_id
    const send_id = req.body.send_id
    const receive_id = req.body.receive_id
    const sendText = req.body.sendText
    pool.getConnection(function(err, connection) {
        connection.query(`INSERT INTO message (convo_id, send_id, receive_id, text) VALUES (?,?,?,?);`,
        [convo_id, send_id, receive_id, sendText],
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
})


app.listen(port, () => {
    console.log("listening...")
})