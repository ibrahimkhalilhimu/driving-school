import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
      <div className="container">
      <div className="row">
                <div className="col-md-6">
        <h2>We Learn To <br/><span style={{color:'#f73e7b'}}>  Drive Easily</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> <span style={{color:'#f73e7b'}}> Dolorum itaque</span> nemo repellat deserunt tempora dolore, <br/> nam perspiciatis, <span style={{color:'#f73e7b'}}>sapiente ut nobis </span>enim explicabo veniam<br/>  beatae! Maiores fuga modi a eos delectus.</p>
        <button>Get Started</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid animated" src="https://i.ibb.co/Ky8XXj1/Driving-school-cartoon-banner-with-driver-hands-on-car-steering-wheel-and-confetti-falling-Auto-less.jpg" alt="Driving Image" />
                    </div>
            </div>
      </div>
            <img src="https://i.ibb.co/GCSZyyn/pngkey-com-wave-shape-png-5161226.png" alt="" className="bottom-img" />
        </div>
    );
};

export default Banner;