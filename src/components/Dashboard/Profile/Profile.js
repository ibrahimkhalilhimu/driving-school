import React, { useContext } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.css'
import swal from 'sweetalert'

const Profile = () => {

  
const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin] = useContext(userContext)

const handleAmin =()=>{
  swal({
    title: "Please Do not use bad",
    text: "Email: test@admin.com  password:123456",
    icon: "warning",
  });
}


    return (
        <div className="profile">
           <Sidebar/>
            <section className=" mt-5 pt-4">
      <div className="container-fluid">
     
          <div className="row ">
              <div className="col-md-6 d-grid gap-4 mx-auto">
              <div className="card">
              <img style={{width:"150px",height:"150px"}} src={loggedInUser.photoURL?loggedInUser.photoURL: "https://i.ibb.co/2Kt6fqv/images.png"} className="rounded-circle mx-auto" alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title">{loggedInUser.name || loggedInUser.displayName}</h4>
    <p className="card-text">{loggedInUser.email}</p>
    <div className="d-grid gap-2 col-6 mx-auto">
  <button onClick={()=>setLoggedInUser({})} className="btn btn-danger" type="button">SignOut</button>
</div>
{ 
!isAdmin && <div className="mt-5">
<p className="text-center text-danger">If Yoy See Admin Panel Click the button and see email and password</p>
         <button onClick={handleAmin} className="btn btn-danger">Admin Panel Click</button>


</div>
}

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