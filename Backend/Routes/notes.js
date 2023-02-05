const express= require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    
    obj={
         name:"Aritra",
         lang:"JAVASCRIPT"
    }

    res.json(obj)
})

module.exports=router






