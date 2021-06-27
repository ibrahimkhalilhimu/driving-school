import React from 'react';

const TestimonialCard = ({testimonial}) => {
    
    // const {img,photoURL,name,description,rating,title} = testimonial;
    // const {Number,CompanyName} = testimonial.data
    return (
        <div className="">
            <div className="card text-center">
       <img src={testimonial.img || testimonial.photoURL} className="rounded-circle mx-auto" alt="..."/>
   <div className="card-body">
       <h3 className="card-title">{testimonial.name || testimonial.data.Name}</h3>
       <small>{testimonial.title || testimonial.data.CompanyName }</small>
       <p className="card-text">{testimonial.description || testimonial.data.description}</p>
       <div  className="product_rating">
       {
                      Array(testimonial.rating || testimonial.data.Number)
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