import React from 'react';
import './Sidebar.css'
import { BiUserCircle, BiCart, BiListOl, BiChat, BiPlus, BiUserPlus, BiHomeAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Sidebar = () => {



  console.log(window.location.pathname.includes("books"));

  return (
    <div className="sidebar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
          </button>
          {window.location.pathname === '/profile' &&
            <Link className="navbar-brand me-auto ps-3 text-danger" to="/profile">
              Profile
            </Link>

          }
          {window.location.pathname === '/reviews' &&
            <Link className="navbar-brand me-auto ps-3 text-danger" to="/reviews">
              Reviews
            </Link>

          }
          {window.location.pathname.includes("books") &&
            <Link className="navbar-brand me-auto ps-3 text-danger" to="/reviews">
              Book
            </Link>

          }


          {window.location.pathname === '/bookingList' &&
            <Link className="navbar-brand me-auto ps-3 text-danger" to="/bookingList">
              Booking List
            </Link>

          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="">
                  {/* <img className="img-fluid rounded-circle" src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* OffsNav */}


      <div className="offcanvas offcanvas-start sidebar-nav mt-1" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title ms-3 fw-bold" id="offcanvasExampleLabel">Dashboard</h5>
          <button type="button" className="btn-close text-reset closeBtn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <Link to="/profile" className="nav-link ">
                  <span className="me-2">
                    <BiUserCircle
                      size="28px"
                    />
                  </span>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/books" className="nav-link ">
                  <span className="me-2">
                    <BiCart
                      size="28px"
                    />
                  </span>
                  <span>Book</span>
                </Link>
              </li>
              <li>
                <Link to="/bookingList" className="nav-link ">
                  <span className="me-2">
                    <BiListOl
                      size="28px"
                    />
                  </span>
                  <span>Booking List</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="nav-link ">
                  <span className="me-2">
                    <BiChat
                      size="28px"
                    />
                  </span>
                  <span>Reviews</span>
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link ">
                  <span className="me-2">
                    <BiListOl
                      size="28px"
                    />
                  </span>
                  <span>Order List</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link ">
                  <span className="me-2">
                    <BiPlus
                      size="28px"
                    />
                  </span>
                  <span>Add Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link ">
                  <span className="me-2">
                    <BiUserPlus
                      size="28px"
                    />
                  </span>
                  <span>Make Admin</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link ">
                  <span className="me-2">
                    <BsGridFill
                      size="28px"
                    />
                  </span>
                  <span>Manage Services</span>
                </a>
              </li>
              <li>
                <Link to="/" className="nav-link ">
                  <span className="me-2">
                    <BiHomeAlt
                      size="28px"
                    />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>



    </div>
  );
};

export default Sidebar;