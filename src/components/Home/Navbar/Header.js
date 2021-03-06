import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { BsListCheck } from "react-icons/bs";
import { userContext } from '../../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)

  return (
    <div className="header">
      <nav className="container navbar navbar-expand-lg">
        <Link style={{ fontSize: "25px" }} className="navbar-brand" to="/">
          <span style={{ color: "white" }}><b>D</b>riving <b>S</b>chool</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span  style={{color:"white !important"}} className="navbar-toggler-icon"></span> */}
          <BsListCheck
            size="30px"
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active pl-3">
              <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#Services">Services</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#testimonial">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/profile">Dashboard
              </Link>
            </li>
            <li className="nav-item">
              {
                loggedInUser.email ? <Link className="nav-link" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title={loggedInUser.name || loggedInUser.displayName}> 
               <img src={loggedInUser.photoURL || "https://i.ibb.co/2Kt6fqv/images.png"} alt="" />
                </Link>
                
                
                :
                  <Link className="nav-link login" to="/login">Login</Link>
              }

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;