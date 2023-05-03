import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div className="layout">	
  <header className="index5">
    <div className="fancy-menu">
      <div className="logo1">
        <Link to={"/"}> <img src="images/logo.jpg" alt /></Link>
      </div>
      <nav>
        <ul>
          <li>
            <div className="menu-link">
              <Link to={"/"}>Home</Link>
              <h1></h1>
            </div>
            <img src="images/menu_bg01.jpg" alt />
          </li>
          <li>
            <div className="menu-link">
            <Link to={"/about"}>About</Link>
            </div>
            <img src="images/menu_bg02.jpg" alt />
          </li>
          <li>
            <div className="menu-link">
            <Link to={"/contact"}>Contact</Link>
            </div>
            <img src="images/menu_bg04.jpg" alt />
           
          </li>
          <li>
            <div className="menu-link">
            <Link to={"/skills"}>Skills</Link>
            </div>
            <img src="images/menu_bg03.jpg" alt />
          </li>
          <li>
            <div className="menu-link">
            <Link to={"/blog"}>Blog</Link>
            </div>
            <img src="images/menu_bg05.jpg" alt />
          </li>
          <li>
            <div className="menu-link">
            <Link to={"/portfolio"}>Portfolio</Link>
            </div>
            <img src="images/menu_bg06.jpg" alt />
          </li>
        </ul>
      </nav>
    </div>
  </header>{/* Header */}
 
</div>


  )
}

export default Navbar