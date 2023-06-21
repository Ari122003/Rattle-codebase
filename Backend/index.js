 const connect = require("./database")
 const express = require('express')
 var cors = require('cors')
 const path = require("path")

 connect()

 const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,"./build")))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"./build/index.html"))
})

app.use("/api/auth", require("./Routes/auth"))
app.use("/api/notes", require("./Routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})