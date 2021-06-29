import React, { useContext, useState } from 'react';
import './LogIn.css'
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../Home/Navbar/Header';
import { userContext } from '../../../App';
import { googleBtn, handleSignOut, initializeLoginInFrameWorker, signInWithEmailAndPassword } from '../Firebase/LoggedInManager';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../Firebase/firebaseConfig';

const notify = () => toast.success('Successfully toasted!');

const LogIn = () => {

  //   if(firebase.apps.length === 0){
  //     firebase.initializeApp(firebaseConfig);
  // }




  const [loggedInUser, setLoggedInUser] = useContext(userContext)
  // const [user, setUser] = useState(false);


  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  initializeLoginInFrameWorker()
  const handleGoogle = () => {
    const loading = toast.loading('Please wait...');
    googleBtn()
      .then((res) => {
        toast.dismiss(loading);
        handleResponse(res, true)
      })
  }

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    const loading = toast.loading('Please wait...');
    const {email,password} = data;
    signInWithEmailAndPassword(email,password)
      .then(res => {
        toast.dismiss(loading);
        // handleResponse(res)
        // setUser(res)
        setLoggedInUser(res)
        console.log(res);
        history.replace(from);
      }).catch(err => {
        toast.dismiss(loading);
        toast.error(err.message)
      })

  }
  const signOut =()=>{
    handleSignOut()
    .then(res =>{
      handleResponse(res,false)
    })
  }


  const handleResponse = (res, redirect) => {
    // setUser(res)
    setLoggedInUser(res)
    if (redirect) {
      history.replace(from);
    }

  }


  return (
    <div className="logIn">
      <Header />

      <div className="container mt-5 pt-5">
        <div className="logInBox">
          <div className="logInText">
            <h4>Login</h4>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input type="email"
                  name="email"
                  className="form-control input"
                  placeholder="@gmail.com"
                  {...register("email", { required: true })}
                />
                <br />
              </div>
              <div className="form-group ">
                <input type="password" name="password" className="form-control input" placeholder="Password" {...register("password", { required: true })} />

              </div>
              <div className="d-flex justify-content-between ">
                <div>
                  <input type="checkbox" id="RememberPassword" name="RememberPassword" value="RememberPassword" />
                  <label style={{ paddingLeft: "5px", fontWeight: "600" }} htmlFor="RememberPassword">Remember Me</label>
                </div>
                <h6>Forgot Password</h6>
              </div>
              <div className="d-grid gap-2">
                <button style={{ backgroundColor: "#7b1798" }} className="btn btn-block text-white mt-4" type='submit'>Login</button>
              </div>
              <Toaster />
              <h6 className="text-center pt-2">Don't have an account?<Link style={{ color: "#7b1798" }} to="/signIn" >Create an account</Link></h6>
            </form>
          </div>
        </div>
        <div className="text-center pt-3">
          <button
            onClick={handleGoogle}
            className="googleBtn ">
            <span style={{ marginRight: "auto" }}>
              <img src="https://i.ibb.co/R0cy8Yn/Group-571.png" alt="" />
            </span>
            <span className='text-dark'>Continue with Google</span> </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;