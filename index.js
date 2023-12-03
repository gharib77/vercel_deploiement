const express = require("express")
const app = express()
const port = 5002 || process.env.PORT

app.use(express.json())
app.get("/",(req,res)=>{
  return res.send("je suis la mes amis")
})

app.listen(port,()=>console.log("server is runing...."))