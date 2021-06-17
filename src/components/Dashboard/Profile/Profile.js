import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.css'
const Profile = () => {
    return (
        <div className="profile">
           <Sidebar/>
            <section class="pt-5">
      <div class="container-fluid">
          <div className="row ">
              <div className="col-md-6 d-grid gap-4 mx-auto">
              <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">Button</button>
</div>
  </div>
</div>
              </div>
          </div>
      </div>
      </section>
        </div>
    );
};

export default Profile;