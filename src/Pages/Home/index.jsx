import React from 'react'
import Navbar from '../../Component/Navbar'
import Panel from '../../Component/Panel'
import { Modal } from 'rsuite'
import Popup from '../../Component/Popup'

const Home = () => {
  return (
    <div className="container full">
  <div className="row">
    <div className="col-md-12">
      <Panel heading="Introduction"></Panel>
      <div className="inner-header_bg">
        <img src="images/inner_header01.jpg" alt />
      </div>
      <div className="fixed-title fixed ">
        <h2>Hi, I' Am</h2>
        <h1> Sahil Chaudhary</h1>
        <p>Web Developer, Professional UI,UX</p>
        <span>
          Turpis, sit amet iaculis dui consectetur at. Cras sagittis molestie orci. Suspendisse ut laoreet mi. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim condimentum id
        </span>
        <a href="#" title><i className="ti-download" />Download My Resume</a>
      </div>
      <div className="fixed-social">
        <ul className="social">
          <li><a href="https://www.linkedin.com/in/sahil8700" title className="li">
            <i className="ti-linkedin" /></a></li>
          <li><a href="#" title className="gplus"><i className="ti-google" /></a></li>
          <li><a href="https://www.instagram.com/sahil_o8_/" title className="insta"><i className="ti-instagram" /></a></li>
         
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home