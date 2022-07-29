import React from "react";
import Img from './Image/profile_photo.jpg'
import {useNavigate } from "react-router-dom";
// import Contact from "./contact";
// import Project from "./projects";
export default function Main(){

    const navigate = useNavigate();
    const About=()=>{
         navigate("/about");
    }
    const Contact=()=>{
        navigate("/contact");
   }
   const Project=()=>{
    navigate("/projects");
   }
    return(
        <div>
            <div id="content">
                <div id="photo">
                    <img src={Img} id="pro_photo" alt="profile_photo"></img>
                </div>
                <div id="writen-content">
                    <h1>Hey, I am Rahul Maurya (he/him) 👦</h1>
                    {/* and Blockchain ⛓  */}
                    <p>🐥Frontend Developer👨</p>
                    <div className="about-me" onClick={About}>📜 Learn More About Me📜</div>
                    <div className="contact-me" onClick={Contact}>📱 Get In Touch 📱</div>
                    <div className="projects" onClick={Project}>📽 Projects 📽</div>
                </div>  
            </div>
        </div>
    )
}