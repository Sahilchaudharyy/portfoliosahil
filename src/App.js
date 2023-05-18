import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Portfolio from "./Pages/Portfolio";
// import Skills from "./Pages/Skills";

import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { userModel } from "./API/user-model";
import { lazy } from "react";
import { Loader } from "rsuite";

const Home =React.lazy(() => import("./Pages/Home"));  
const About = React.lazy(() => import("./Pages/About"));  
const Contact = React.lazy(() => import("./Pages/Contact")); 
const Blog = React.lazy(() => import("./Pages/Blog")); 
const Portfolio = React.lazy(() => import("./Pages/Portfolio")); 
const Skills = React.lazy(() => import("./Pages/Skills")); 
function App() {

  
  return (
    <div className="App">
      <BrowserRouter> 
     
        <>
      <Navbar/>
      <Suspense fallback={<SkeletonTheme />}>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/blog"element={<Blog/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/skills"element={<Skills/>}/>
      <Route path="/portfolio"element={<Portfolio/>}/>
     </Routes>
   </Suspense>
     </>
   
      
     </BrowserRouter>
    
    </div>
  );
}

export default App;
