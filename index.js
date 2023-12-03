const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
require('dotenv').config()
const port = 5002 || process.env.PORT
db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  return res.send("je suis la mes amis")
})
app.get("/users",(req,res)=>{
  db.query('select * from students',[],(err,result)=>{
    console.log(result)
    return res.json(result)
  })
  
})

app.listen(port,()=>console.log("server is runing...."))