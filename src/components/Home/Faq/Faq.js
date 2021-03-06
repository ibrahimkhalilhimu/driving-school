import React, { useState } from 'react';
import './Faq.css'
import FaqData from './FaqData';
import FaqQuestion from './FaqQuestion';
import Fade from 'react-reveal/Fade';
import faqPic from '../../../img/20943401.jpg';
const Faq = () => {
    const [faqData,setFaqData] = useState(FaqData)
    return (
        <div className='faq'>
            <div className="container text-center">
                <h1>Frequently Asked Questions</h1>
                <div className="row pt-5">
                    <div className="col-md-5">
                    <Fade left duration={2000} distance="40px">
                    <img className='img-fluid' src={faqPic} alt="" />
                    </Fade>
                    </div>
                    
                    <div className="col-md-7 main-div">
                    <Fade right duration={2000} distance="40px">
                        {
                            faqData.map(data=><FaqQuestion data={data} key={data.id}></FaqQuestion>)
                        }
                          </Fade>
                    </div>
                  
                </div>
              
            </div>
        </div>
    );
};

export default Faq;