import React from 'react';
import './Team.css'
import { FaFacebook,FaTwitterSquare,FaYoutube,FaInstagram } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import himu from '../../../img/ibrahim.jpg'
import alamin from '../../../img/alamin.jpg'
import saiful from '../../../img/saiful.jpg'
import zihad from '../../../img/zihad.jpg'
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
                                <img className="img-fluid" src={himu} alt="" />
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
                                <img className="img-fluid" src={alamin} alt="" />
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
                                <img className="img-fluid" src={saiful} alt="" />
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
                                <img className="img-fluid" src={zihad} alt="" />
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