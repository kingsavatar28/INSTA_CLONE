import React, { useEffect, useState } from "react";
import ".//styles/Login.css";
import { Typography, Button,Alert,AlertTitle} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();
  const PostData=()=>{
        
    fetch("/signin",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          password,
          email
      })        
  }).then(res=>res.json())
  .then(data=>{
     if(data.error){
      <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
     }
     else{
       <><Alert onClose={() => { } }>This is a success alert — check it out!</Alert><Alert
         action={<Button color="inherit" size="small">
           UNDO
         </Button>}
       >
         This is a success alert — check it out!
       </Alert>
        
        </>
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))  
        navigate("/")
     }
     
  }).catch(err=>{
      console.log(err)
  })

}
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          MyBook
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>

        <Button type="submit" onClick={()=>{PostData()}}>Login</Button>

        <Link to="/signup">
          <Typography>New User?</Typography>
        </Link>
      </form>
    </div>
  );
};  

export default Login;