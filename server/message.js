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
        connection.query(`SELECT name, bracu_Id FROM users`,
        (err, result) => {
            if(err){
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
        const convoId = req.query.convo_id;
        connection.query(`SELECT sender_id, text FROM messages WHERE convo_id = ?`,
        [convoId],
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
    const sender_id = req.body.sender_id
    const receiver_id = req.body.receiver_id
    const sendText = req.body.sendText
    pool.getConnection(function(err, connection) {
        connection.query(`INSERT INTO messages (convo_id, sender_id, receiver_id, text) VALUES (?,?,?,?)`,
        [convo_id, sender_id, receiver_id, sendText],
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