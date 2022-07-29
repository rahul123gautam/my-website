import React from 'react'
import './App.css';
import Home from './my_work/home.js'
import Nav  from './my_work/nav.js'
import About from './my_work/about.js'
import Contact from './my_work/contact.js';
import Project from './my_work/projects.js';
import Blogs from './my_work/blog.js';
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/projects' element={<Project/>}/>
     <Route path='/blog' element={<Blogs/>}/>
     <Route path='*' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;
