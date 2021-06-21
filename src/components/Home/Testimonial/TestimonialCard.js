import React from 'react';

const TestimonialCard = ({description,img,name,title,rating}) => {
    return (
        <div className="">
            <div className="card text-center">
       <img src={img} className="rounded-circle mx-auto" alt="..."/>
   <div className="card-body">
       <h3 className="card-title">{name}</h3>
       <small>{title}</small>
       <p className="card-text">{description}</p>
       <div  className="product_rating">
       {
                      Array(rating)
                      .fill()
                      .map( (_,i) => (
                        <p>⭐</p>
                      ))
                  }
             
       </div>
     
   </div>
      </div>
        </div>
    );
};

export default TestimonialCard;