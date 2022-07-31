import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./styles/Createpost.css"
const Createpost = () => {
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [title, settitle] = useState("");
    const [url,setUrl] = useState("")
//this code is for create post not working as it should 
//kal-al

    const navigate=useNavigate();
    useEffect(()=>{
      if(url){
       fetch("/createpost",{
           method:"post",
           headers:{
               "Content-Type":"application/json",
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           },
           body:JSON.stringify({
               title,
               caption,
               pic:url
           })
       }).then(res=>res.json())
       .then(data=>{
   
          if(data.error){
            
          }
          else{
            localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
             navigate("/");
          }
       }).catch(err=>{
           console.log(err)
       })
   }
   },[url])

  const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","social-clone")
    data.append("cloud_name","divyansh0924")
    fetch("https://api.cloudinary.com/v1_1/divyansh0924/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

 
}
const loginHandler = (e) => {
  e.preventDefault();
};

    return ( 
        <div className="newPost">
        <form className="newPostForm"  onSubmit={loginHandler} >
          <Typography variant="h3">New Post</Typography>
  
       
          <input type="file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />
          <input
            type="text"
            placeholder="title..."
            value={title}
            onChange={(e) => settitle(e.target.value)}  
          />
          <input
            type="text"
            placeholder="Caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <Button type="submit" onClick={()=>{postDetails()}}>
            Post
          </Button>
        </form>
      </div>
    );
}
 
export default Createpost;