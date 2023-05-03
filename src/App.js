import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
     
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/blog"element={<Blog/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/skills"element={<Skills/>}/>
      <Route path="/portfolio"element={<Portfolio/>}/>
      

     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
