import React from "react";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const About = () => {
    navigate("/about");
  };
  const Blogs = () => {
    navigate("/blog");
  };
  const Projects = () => {
    navigate("/projects");
  };
  const Contact = () => {
    navigate("/contact");
  };
  return (
    <div className="nav">
      
      <div className="main-hamburger">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="myLinks">
        <div onClick={Home}>Home</div>
        <div onClick={About}>About Me</div>
        <div onClick={Blogs}>Blogs</div>
        <div onClick={Projects}>Projects</div>
        <div onClick={Contact}>Contact Me</div>
      </div>
      </div>
    </div>
  );
}
