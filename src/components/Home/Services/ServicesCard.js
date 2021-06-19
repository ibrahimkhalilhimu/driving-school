import React from 'react';
import { useHistory } from 'react-router';

const ServicesCard = ({data}) => {
    const {img,id,title,price,description} = data;

    let history = useHistory();
    function handleClick(id) {
      history.push(`/books/${id}`);
    }
    
    return (
    
 <div onClick={() =>handleClick(id)} className="col-md-4">
 <div className="card">
       <img src={img} className="rounded-circle mx-auto" alt="..."/>
   <div className="card-body">
       <h3 className="card-title">{title}</h3>
       <p className="card-text">{description}</p>
      < h4>${price}</h4>
   </div>
      </div>
 </div>
  
    );
};

export default ServicesCard;