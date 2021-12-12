const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
const { response } = require('express');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prangon"
});

db.connect((err) => {
    if(err){
        console.log('fail');
    }else {
        console.log('success');
    }
});


app.get('/text', (req, res) => {
    const sendText = req.body.sendText
    console.log(sendText)
    db.query(`INSERT INTO test (any) VALUES (${sendText})`, (err, result) => {
        if(err){
            res.status(400).send(err);
            return;
        }
        res.status(200).json({
            status:200,
            success: true
        })
    })
})


app.listen(port, () => {
    console.log("listening...")
})