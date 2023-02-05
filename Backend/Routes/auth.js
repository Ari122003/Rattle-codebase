const express= require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    
    obj={
         name:"Aritra",
         roll:81,
    }

    res.json(obj)
})

module.exports=router




