import React, { useState } from 'react';
import './Faq.css'
import FaqData from './FaqData';
import FaqQuestion from './FaqQuestion';

const Faq = () => {
    const [faqData,setFaqData] = useState(FaqData)
    return (
        <div className='faq'>
            <div className="container text-center">
                <h1>Frequently Asked Questions</h1>
                <div className="row pt-5">
                    <div className="col-md-5">
                    <img className='img-fluid' src="https://i.ibb.co/5hX5TRX/Website-FAQ-section-User-helpdesk-customer-support-frequently-asked-questions-Problem-solution-quiz.jpg" alt="" />
                    </div>
                    <div className="col-md-7 main-div">
                        {
                            faqData.map(data=><FaqQuestion data={data} key={data.id}></FaqQuestion>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;