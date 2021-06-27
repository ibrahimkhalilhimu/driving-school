import React from 'react';
import './MakeAdmin.css'
import Sidebar from '../../Sidebar/Sidebar';
import { useForm} from "react-hook-form";
import swal from 'sweetalert'
import { IdealBankElement } from '@stripe/react-stripe-js';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
     fetch('http://localhost:5000/makeAdmin',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data=>{
         if(data){
             alert("Success")
         }
     })
    }
    return (
        <div className="makeAdmin">
            <Sidebar/>
            <section className="mt-5 p-4">
            <div className="fromSection">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-5">
                        <h4>Email</h4>
                        <input type="email" 
                    name="email" 
                    className="form-control "
                    placeholder="@gmail.com"
                   {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
     />
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn bg-success text-white mt-3">Submit</button>
                    </div>
                </form>
</div>
            </section>
         
        </div>
    );
};

export default MakeAdmin;