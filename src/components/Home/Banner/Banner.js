import React from 'react';
import './Banner.css'
import Fade from 'react-reveal/Fade';
import wave from '../../../img/pngkey.com-wave-shape-png-5161226.png';
import drive from '../../../img/3Z_2103.w026.n002.283B.p900.283.jpg'
const Banner = () => {
    return (
        <div className="banner">
            <Fade left duration={2000}  distance="40px">
      <div className="container">
      <div className="row">
                <div className="col-md-6">
               
        <h2>We Learn To <br/><span style={{color:'#f73e7b'}}>  Drive Easily</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> <span style={{color:'#f73e7b'}}> Dolorum itaque</span> nemo repellat deserunt tempora dolore, <br/> nam perspiciatis, <span style={{color:'#f73e7b'}}>sapiente ut nobis </span>enim explicabo veniam<br/>  beatae! Maiores fuga modi a eos delectus.</p>
        <button>Get Started</button>
     
                </div>
                <div className="col-md-6">
                
                    <img className="img-fluid animated" src={drive} alt="Driving Image" />
                  
                    </div>
                    
            </div>
            
      </div>
      </Fade>
            <img src={wave} alt="" className="bottom-img" />
            
        </div>
    );
};

export default Banner;