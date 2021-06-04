import React from 'react';
import './SignIn.css'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Header from '../../Home/Navbar/Header';

const notify = () => toast.success('Successfully toasted!');

const SignIn = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="signIn"> 
        <Header/>
             <div className="container mt-5 pt-5">
            <div className="signInBox ">
              <div className="signInText">
              <h4>SignIn</h4>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
    <input type="text" name="name" className="form-control input"placeholder="Name" {...register("name", {required: true})} />
    <br/>
  </div>
         <div className="form-group">
    <input type="email" 
    name="email" 
    className="form-control input"
    placeholder="@gmail.com"
    {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
     />
    <br/>
  </div>
  <div className="form-group">
    <input type="password" name="password" className="form-control input"placeholder="Password" {...register("Password", {required: true})} />
    <br/>
  </div>
  <div className="form-group">
    <input type="password" name="Confirm password" className="form-control input"placeholder="Confirm password" {...register("Confirm password", {required: true})} />
  </div>
<div className="d-grid gap-2">
<button onClick={notify} style={{backgroundColor:"#7b1798"}} className="btn btn-block text-white mt-3" type='submit'>SignIn</button>
  <Toaster />
</div>
  <h6 className="text-center pt-2"><Link style={{color:"#7b1798"}} to="/login" >Already have an account</Link></h6>
                </form>
              </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;