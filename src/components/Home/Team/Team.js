import React from 'react';
import './Team.css'
import { FaFacebook,FaTwitterSquare,FaYoutube,FaInstagram } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Team = () => {
    return (
        <div className="team">
            <div className="container text-center">
            <Fade bottom duration={2500} distance="40px">
                <h1 className="title">OUR INSTRUCOTRS & TESTERS</h1>
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="front">
                                <img className="img-fluid" src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                            </div>
                            <div className="back">
                                <div className="back-content middle">
                                    <h2>Ibrahim Khalil <br />
                                    <span>INSTRUCOTRS & Testers</span>
                                    </h2>
                                    <p>01874874852</p>
                                    <div className="sm">
                                        <a href="#">
                                            <FaFacebook/>
                                        </a>
                                        <a href="">
                                            <FaTwitterSquare/>
                                        </a>
                                        <a href="">
                                            <FaYoutube/>
                                        </a>
                                        <a href="">
                                            <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="front">
                                <img className="img-fluid" src="https://i.ibb.co/SP7qz1x/201458935-962728781207650-870207678202895217-n.jpg" alt="" />
                            </div>
                            <div className="back">
                                <div className="back-content middle">
                                    <h2>Al-Amin Hossain <br />
                                    <span>INSTRUCOTRS</span>
                                    </h2>
                                    <p>01874874852</p>
                                    <div className="sm">
                                        <a href="#">
                                            <FaFacebook/>
                                        </a>
                                        <a href="">
                                            <FaTwitterSquare/>
                                        </a>
                                        <a href="">
                                            <FaYoutube/>
                                        </a>
                                        <a href="">
                                            <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="front">
                                <img className="img-fluid" src="https://i.ibb.co/P4SrsVH/92025927-746468085884340-1296511993708019712-n.jpg" alt="" />
                            </div>
                            <div className="back">
                                <div className="back-content middle">
                                    <h2>Saiful Islam <br />
                                    <span>INSTRUCOTRS</span>
                                    </h2>
                                    <p>01874874852</p>
                                    <div className="sm">
                                        <a href="#">
                                            <FaFacebook/>
                                        </a>
                                        <a href="">
                                            <FaTwitterSquare/>
                                        </a>
                                        <a href="">
                                            <FaYoutube/>
                                        </a>
                                        <a href="">
                                            <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card ">
                            <div className="front">
                                <img className="img-fluid" src="https://i.ibb.co/tC35GLk/130255507-1036028706860733-8337769294205120067-n.jpg" alt="" />
                            </div>
                            <div className="back">
                                <div className="back-content middle">
                                    <h2>Mehedi Hasan Zihad <br />
                                    <span>TESTERS</span>
                                    </h2>
                                    <p>01874874852</p>
                                    <div className="sm">
                                        <a href="#">
                                            <FaFacebook/>
                                        </a>
                                        <a href="">
                                            <FaTwitterSquare/>
                                        </a>
                                        <a href="">
                                            <FaYoutube/>
                                        </a>
                                        <a href="">
                                            <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Team;