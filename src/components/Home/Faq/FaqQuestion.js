import React, { useState } from 'react';
import './Faq.css'

const FaqQuestion = ({data}) => {
    const {id,answer,question} = data;
    const [show, setShow] = useState(false);
    return (
       <div className="">
            <div className="main-heading">
               <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
               
               <h3>{question}</h3>
        </div>
        { show &&  <p className="answers"> {answer} </p> }
       </div>
    );
};

export default FaqQuestion;