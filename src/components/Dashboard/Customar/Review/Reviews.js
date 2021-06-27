import React, { useContext } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Reviews.css'
import { userContext } from '../../../../App';
import swal from 'sweetalert'

const Reviews = () => {
     const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newReview = {...loggedInUser,data}

        fetch(`http://localhost:5000/addReview`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        })
        .then(res=>res.json())
        .then(data => {
          if(data){
            swal("Review Successfully!", "Your Review Successfully!", "success");
          }
        })
        .catch(error => {
          console.error(error)
        })
    }

   
  


    return (
        <div className="reviews">
            <Sidebar/>
            <section className=" mt-5 pt-4">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <div className=" fromSection">
     <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-5">
                    <input type="text" 
                        name="name" 
                        className="form-control "
                        defaultValue={loggedInUser.name}
                        placeholder="Your Name"
                        {...register("Name", {required: true})}
                        />
                        <br/>
                    </div>
                 
                    <div className="form-group">
                    <input type="text" 
                        name="CompanyName" 
                        className="form-control "
                        placeholder="Company Name"
                        {...register("CompanyName", {required: true})}
                        />
                         <br/>
                    </div>
                    <div className="form-group">
                    <input type="number" className="form-control" placeholder="Rating Star" {...register("Number", { valueAsNumber: true,})} />
                    <br/>
                    </div>
                    <div className="form-group">
                    <textarea style={{height:"120px"}} type="text"  {...register("description", {required: true})} name="description" placeholder="Description" cols="30px" rows="10px" className="form-control" />
                         <br/>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn bg-info text-white">Submit</button>
                    </div>
                </form>
     </div>
        </div>
    
    </div>
        </div>
</section>
        </div>
    );
};

export default Reviews;