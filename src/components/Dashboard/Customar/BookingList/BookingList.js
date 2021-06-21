import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
  const [order,setOrder] = useState([])
  const [loggedInUser,setLoggedInUser] =useContext(userContext)
  useEffect(()=>{
    fetch('http://localhost:5000/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data=> setOrder(data))
},[])

console.log(order);
    return (
        <div className="bookingList">
                <Sidebar/>
            <section className="pt-3">
      <div className="container-fluid">
      <div className="row">
      {
        order.length ===0 &&
       <div className="text-center mt-5">
          <div className="spinner-grow " role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </div>
       </div>
    }
{
  order.map(data=>
    <div className="col-md-6">
    <div className="card">
      <div className="d-flex ">
      <img src={data.courseInfo.img} className="rounded-circle" alt="..."/>
      <div className="d-flex justify-content-end">
        
      </div>
      </div>

<div className="card-body">
<h5 className="card-title">{data.courseInfo.title}</h5>
<p className="card-text">{data.courseInfo.description}</p>
</div>
</div>
    </div>
  )
}


          
      </div>
        </div>
</section>
        </div>
    );
};

export default BookingList;