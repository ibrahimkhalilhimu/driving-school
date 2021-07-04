import React, { useContext, useState,useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Book.css'
import swal from 'sweetalert'
import toast from 'react-hot-toast';
import { userCardInfo, userContext } from '../../../../App';
import Payment from '../../Payment/Payment';

const Book = () => {
    const [courseInfo,setCourseInfo] = useContext(userCardInfo)
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const [data,setData] = useState(null)
      const { register, handleSubmit, watch, errors } = useForm();
     
    const onSubmit = data => {
      setData(data)
    }


const handlePayment = (paymentId) => {
  const newOrder = {...loggedInUser,courseInfo,
    data,
    paymentId,
    OrderStatus: "Pending",
  
  }
  fetch(`https://glacial-peak-56892.herokuapp.com/addOrder`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  })
  .then(res=>res.json())
  .then(data => {
    if(data){
     console.log(data);
    }
  })
  .catch(error => {
    console.error(error)
  })
}


    return (
        <div className="bookPage">
            <Sidebar/>
            
<section className=" mt-5 pt-4">
      <div className="container-fluid ">
    <div className="row">
        <div className="col-md-12">
        <div style={{display: data ? 'none': 'block'}} className="fromSection">
     <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-5">
                    <input type="text" 
                        name="name" 
                        className="form-control "
                        placeholder="Your Name"
                        defaultValue={loggedInUser.name || loggedInUser.displayName}
                        {...register("Name", {required: true})}
                        />
                        <br/>
                    </div>
                    <div className="form-group">
                    <input type="email" 
                    name="email" 
                    defaultValue={loggedInUser.email}
                    className="form-control "
                    placeholder="@gmail.com"
                   {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
     />
      <br/>
                    </div>
                    <div className="form-group">
                    <input type="number" defaultValue={courseInfo.price} className="form-control " placeholder="Number" {...register("Number", {required: true})} />
                    <br/>
                    </div>
                    <div className="form-group">
                    <input type="text" 
                        name="text" 
                        defaultValue={courseInfo.title}
                        className="form-control "
                        placeholder="Course Name"
                        {...register("Text", {required: true})}
                        />
                         <br/>
                    </div>
                   
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn bg-info text-white">Send</button>
                    </div>
                </form>
                <br/>
               
               
     </div>

     <div style={{display: data ? 'block': 'none'}} className="fromSection">
                  <h2 className="text-danger">Payment</h2>
                <Payment handlePayment={handlePayment}/> 
                </div>
        </div>
    </div>
        </div>
        
</section>
        </div>
    );
};

export default Book;