import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
    return (
        <div className="bookingList">
                <Sidebar/>
            <section class="pt-3">
      <div class="container-fluid">
      <div className="row">
          <div className="col-md-4">
          <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
          </div>
          
      </div>
        </div>
</section>
        </div>
    );
};

export default BookingList;