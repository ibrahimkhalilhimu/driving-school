import React from 'react';
import './Team.css'
import { FaFacebook,FaTwitterSquare,FaYoutube,FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <div className="team">
            <div className="container text-center">
                <h1 className="title">OUR INSTRUCOTRS & TESTERS</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card ">
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
                                <img className="img-fluid" src="https://scontent.fcla1-1.fna.fbcdn.net/v/t1.6435-0/s552x414/82075941_2544716445849805_919655431259815936_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=HPIYnv43qi8AX-Bg91x&_nc_oc=AQktkoqQzNDG4_IVQeLQ5decH59Ocj4te_4fO-jcAw2VC70HzQUvNoHXKC1Jak2ql5o&_nc_ht=scontent.fcla1-1.fna&tp=7&oh=8f0008cf054437455f7b6254f98aae0f&oe=60DC30B8" alt="" />
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
                                <img className="img-fluid" src="https://scontent.fcla1-1.fna.fbcdn.net/v/t1.6435-0/s552x414/92025927_746468085884340_1296511993708019712_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=tNrlDu5lNcIAX-O7y3Z&_nc_oc=AQlZoKy2tEW2pwzBnt8aMta5joFpRVuDPtFevB9-e1mcK6y0ZbuT4xo3TgUUwUhoQqk&_nc_ht=scontent.fcla1-1.fna&tp=7&oh=ab056e21bf924db4a0890fda041ae76c&oe=60DB2CA0" alt="" />
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
                </div>
            </div>
        </div>
    );
};

export default Team;