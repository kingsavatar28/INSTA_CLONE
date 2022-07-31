const express= require("express");
const router=express.Router()
const mongoose = require("mongoose")
const user =mongoose.model("user")
const bycrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const{JWT_SECRET}=require("../keys")
const requireLogin = require("../middleware/requireLogin")

router.post("/signup",(req,res)=>{
    const{name,email,password}=req.body;
    if(!name||!email||!password)
    {
        res.status(422).json({error:"please enter all fields"}) 
    }
    


user.findOne({email:email})
.then((saveduser)=>{
    if(saveduser)
    {
        res.json({error:"email alerdy exist"})
        
    }
    bycrypt.hash(password,12)
    .then((hashpassword)=>{
      
        const data=new user({
            email,
            password:hashpassword,
            name
        })
           data.save()
           .then((data)=>{
               res.json({message:"data entered sucessfull"})
           })
           .catch(err=>{
               console.log(err)
           })
    })
    })
   
.catch((error)=>{console.log(error)})
})

router.post("/signin",(req,res)=>{
   const{email,password}=req.body
   if(!email||!password)
   {
       res.status(422).json({error:"please enter all fields"}) 
   }
   user.findOne({email:email})
   .then((saveduser)=>{
       if(!saveduser)
       {
        return res.json({error:"invalid email or password"})
       }
       bycrypt.compare(password,saveduser.password)
       .then(doMatch=>{
        if(doMatch)
        {
           // res.json({message:"succesfully signed in"})
            const token = jwt.sign({_id:saveduser._id},JWT_SECRET)
            const{_id,name,email}=saveduser
               res.json({token,user:{_id,name,email}})
 
        }
        else
        {
        res.status(422).json({message:"invalid email and password"})
        }
    })
   })
   .catch(err=>{console.log(err)})
 
  

})


module.exports= router;