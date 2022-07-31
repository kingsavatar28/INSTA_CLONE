import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./styles/Signup.css";
//KING FOR THE GREATEST.....AL THE BEST A\FIR   DETAH THE BEST FOR KHALESSI//ALL THE BEST ETERNAL      
     const Signup = () => {
      const navigate = useNavigate() 
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
       
    const PostData=()=>{
        
        fetch("/signup",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name,
              password,
              email
          })        
      }).then(res=>res.json())
      .then(data=>{
         if(data.error){
           
         }
         else{
            navigate("/signin")
         }
         
      }).catch(err=>{
          console.log(err)
      })
  
    }
    const loginHandler = (e) => {
      e.preventDefault();
    };
      
      return (
            <div className="register">
              <form className="registerForm" onSubmit={loginHandler} >
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                  MyBook
                </Typography>
        
          
        
                <input type="file" accept="image/*"  />
        
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  className="registerInputs"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
        
                <input
                  type="email"
                  placeholder="Email"
                  className="registerInputs"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
        
                <input
                  type="password"
                  className="registerInputs"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
        
                <Link to="/signin">
                  <Typography>Already Signed Up? Login Now</Typography>
                </Link>
        
                <Button type="submit" onClick={()=>PostData()}>
                  Sign Up
                </Button>
              </form>
            </div>
          );
    }
     
    export default Signup; 