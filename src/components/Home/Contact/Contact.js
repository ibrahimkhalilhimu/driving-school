import React from 'react';

const Contact = () => {
    return (
        <div id="contact"> 
             <div className="container">
                <div className="row contacts">
            <div className="col-md-6 pt-5">
                <h1> Any Questions? Fill-In<br/> The Form & Send Today!</h1>
                <p>With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6 pt-3">
                <form action="">
                <div className="form-group">
                           <input type="email" className="form-control" placeholder="Your Email Address "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/Company's Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group ">
                           <button type="button" className="btn bg-dark text-white all-btn"> Send </button>
                           </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;