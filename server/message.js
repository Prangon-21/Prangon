const express = require("express")
const mysql = require("mysql")

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prangon"
})

app.listen(3001, () => {
    console.log("listening...")
})