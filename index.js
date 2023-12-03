const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
const port = 5002 || process.env.PORT
db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crud"
})
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  return res.send("je suis la mes amis")
})
app.get("/users",(req,res)=>{
  db.query('select * from students',[],(err,result)=>{
    return res.json(result)
  })
  
})

app.listen(port,()=>console.log("server is runing...."))