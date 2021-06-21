import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Reviews.css'
import ReviewData from '../../../Data/ReviewsData/ReviewsData';
const Reviews = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    const handleAdd =()=>{
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json' 
            },
            body: JSON.stringify(ReviewData),
  
          })
    }
  


    return (
        <div className="reviews">
            <Sidebar/>
            <section className=" pt-3">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <div className=" fromSection">
     <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-5">
                    <input type="text" 
                        name="name" 
                        className="form-control "
                        placeholder="Your Name"
                        {...register("Name", {required: true})}
                        />
                        <br/>
                    </div>
                 
                    <div className="form-group">
                    <input type="text" 
                        name="text" 
                        className="form-control "
                        placeholder="Company Name"
                        {...register("Text", {required: true})}
                        />
                         <br/>
                    </div>
                    <div className="form-group">
                    <input type="number" 
                        name="number" 
                        className="form-control "
                        placeholder="Rating"
                        {...register("Text", {required: true})}
                        />
                         <br/>
                    </div>
                    <div className="form-group">
                    <textarea style={{height:"120px"}} type="text"  {...register("Name", {required: true})} name="description" placeholder="Description" cols="30px" rows="10px" className="form-control" />
                         <br/>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn bg-info text-white">Submit</button>
                    </div>
                </form>
     </div>
        </div>
        <button onClick={handleAdd} className="btn btn-danger">add product</button>
    </div>
        </div>
</section>
        </div>
    );
};

export default Reviews;