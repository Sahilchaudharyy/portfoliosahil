import React from 'react'
import Navbar from '../../Component/Navbar'
import Panel from '../../Component/Panel'
const Home = () => {
  return (
    
    <div className="container full">
    <div className="row">
      <div className="col-md-12">
      <Panel heading="Introduction"></Panel>
        <div className="inner-header_bg">
          <img src="images/inner-header02.jpg" alt />
        </div>
        <div className="fixed-title fixed">
          <h2>Hi, I' Am</h2>
          <h1> Sahil Chaudhary </h1>
          <p>Web designer, Developer, Professional</p>
          <span>
            Turpis, sit amet iaculis dui consectetur at. Cras sagittis molestie orci. Suspendisse ut laoreet mi. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim condimentum id
          </span>
          <a href="#" title><i className="ti-download" />Download My Resume</a>
        </div>
        <div className="fixed-social">
          <ul className="social">
            <li><a href="#" title className="fb"><i className="ti-facebook" /></a></li>
            <li><a href="#" title className="gplus"><i className="ti-google" /></a></li>
            <li><a href="#" title className="reddit"><i className="ti-reddit" /></a></li>
            <li><a href="#" title className="drible"><i className="ti-dribbble" /></a></li>
          </ul>
        </div>
      </div>
      
    </div>

   <section id="feature">
    <div className="sect-gap">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="feature">
              <i className="ti-alarm-clock" />
              
              <h4>Retina Ready</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature">
              <i className="ti-brush-alt" />
              <h4>Clean Coder</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            </div>	
          </div>
          <div className="col-md-3">
            <div className="feature">
              <i className="ti-camera" />
              <h4>Photograhpic</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature">
              <i className="ti-cloud" />
              <h4>Best Analytics</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Home