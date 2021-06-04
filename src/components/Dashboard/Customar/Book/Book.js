import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Book.css'
const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="bookPage">
            <Sidebar/>
            {/* <h2>Thus us dolor</h2> */}
            
<section class="mt-5 pt-3">
      <div class="container-fluid">
       <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-5  pt-5">
                    <input type="text" 
                        name="name" 
                        className="form-control input"
                        placeholder="Your Name"
                        {...register("Name", {required: true})}
                        />

                    </div>
                    <div className="form-group">
                    <input type="email" 
      name="email" 
     className="form-control input"
      placeholder="@gmail.com"
          {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
     />
                    </div>
                    <div className="form-group">
                    <input type="number" placeholder="Number" {...register("Number", {})} />
                    </div>
                    <div className="form-group">
                    <input type="text" 
                        name="text" 
                        className="form-control input"
                        placeholder="Course Name"
                        {...register("Text", {required: true})}
                        />
                    </div>

                    <div className="form-group ">
                        <button type="submit" className="btn bg-dark text-white">Send</button>
                    </div>
                </form>
        </div>
</section>
        </div>
    );
};

export default Book;