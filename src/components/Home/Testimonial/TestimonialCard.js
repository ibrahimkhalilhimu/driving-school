import React from 'react';

const TestimonialCard = ({description,img,name,title}) => {
    return (
        <div className="">
            <div className="card">
       <img src={img} className="rounded-circle mx-auto" alt="..."/>
   <div className="card-body">
       <h3 className="card-title">{name}</h3>
       <small>{title}</small>
       <p className="card-text">{description}</p>
     
   </div>
      </div>
        </div>
    );
};

export default TestimonialCard;