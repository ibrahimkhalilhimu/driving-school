import React from 'react';
import './ChooseUs.css'
import { AiOutlineUser,AiOutlineCar } from "react-icons/ai";
import { BsShieldShaded,BsPencilSquare } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
const ChooseUs = () => {
    return (
        <div className="chooseUs">  
            <div className="container text-center">
            <Fade bottom duration={2500} distance="40px">
                <h1 className="titles">Why Choice Us</h1>
                <div className="row">
                    <div className="col-md-4 choice ">
                    <FaRegNewspaper
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Certificate Course</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-md-4 choice">
                        <AiOutlineUser
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Free Choice Trainer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-md-4 choice">
                        <BsPencilSquare
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Scedule Routine</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-md-4 choice">
                        <BsShieldShaded
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Body Insurence</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-md-4 choice">
                        <GiReceiveMoney
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Money Back Guarantee</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-md-4 choice">
                        <AiOutlineCar
                        size="100px"
                        color="#7b1798"
                        />
                        <h4>Free 1D Car Rental</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default ChooseUs;