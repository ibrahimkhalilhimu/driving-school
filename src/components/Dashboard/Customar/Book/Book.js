import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Book.css'
import { useParams } from 'react-router-dom';
import CourseData from '../../../Data/CourseData/CourseData';
import { UserCourseInfo } from '../../../../App';

const Book = () => {

    let { id } = useParams();
    const homeData =CourseData.find(data => data.id == id);
    console.log(homeData);
    
    const handleAdd =()=>{
        fetch('http://localhost:5000/addCourses', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json' 
            },
            body: JSON.stringify(CourseData),
          
          })
    }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="bookPage">
            <Sidebar/>
            
<section class="pt-3">
      <div class="container-fluid ">
    <div className="row">
        <div className="col-md-12">
        <div className="fromSection">
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
                    <input type="email" 
      name="email" 
     className="form-control "
      placeholder="@gmail.com"
          {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
     />
      <br/>
                    </div>
                    <div className="form-group">
                    <input type="number" defaultValue={ homeData.price } className="form-control " placeholder="Number" {...register("Number", {required: true})} />
                    <br/>
                    </div>
                    <div className="form-group">
                    <input type="text" 
                        name="text" 
                        defaultValue={homeData.title} 
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
     </div>

     <button onClick={handleAdd} className="btn btn-danger">add product</button>
        </div>
    </div>
        </div>
</section>
        </div>
    );
};

export default Book;