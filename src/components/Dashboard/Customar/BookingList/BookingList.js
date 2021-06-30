import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import EventsLoader from '../../Loader/EventsLoader/EventsLoader';
import Sidebar from '../../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
  const [order,setOrder] = useState([])
  const [loggedInUser,setLoggedInUser] =useContext(userContext)
  useEffect(()=>{
    fetch('https://glacial-peak-56892.herokuapp.com/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data=> setOrder(data))
},[])

console.log(order);
    return (
        <div className="bookingList">
                <Sidebar/>
            <section className="mt-5 pt-4">
      <div className="container-fluid">
      <div className="row">
      {
        order.length ===0 &&
      <EventsLoader/>
    }
{
  order.map(data=>
    <div className="col-md-6">
    <div className="card">
      <div className="d-flex ">
      {
     data.courseInfo.image ? <img src={`data:image/png;base64,${data.courseInfo.image.img}`} className="rounded-circle" alt="..."/>:
     <img src={data.courseInfo.img} className="rounded-circle" alt="..."/>
   }
      {/* <img src={data.courseInfo.img} className="rounded-circle" alt="..."/> */}
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