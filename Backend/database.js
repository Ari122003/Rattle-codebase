const mong = require("mongoose")

const uri = "mongodb://localhost:27017"

const connect =()=>{
    mong.connect(uri,()=>{
        console.log("Successfully connected")
    })
}

module.exports=connect