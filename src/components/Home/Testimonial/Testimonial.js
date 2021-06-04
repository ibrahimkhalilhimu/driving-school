import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="testimonial" id="testimonial">
            <div className="container text-center">
                <h1 className="title-testi">What Our Clients are saying</h1>
    <div className="row">
        <div className="col-md-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
      <div className="row">
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person One</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person two</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person three</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="carousel-item">
      <div className="row">
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person four</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person five</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="singleBox">
                  <div className="img-area">
                      <img src="https://i.ibb.co/f4vCC6m/121419252-798374920909813-7495845855244719028-n.jpg" alt="" />
                  </div>
                  <div className="img-text">
                      <h2>Person six</h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laudantium optio? Eos officia eaque provident sequi quod porro natus exercitationem aliquam, culpa ratione quasi accusantium</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
        </div>
        </div>
    </div>
            </div>
        </div>
    );
};

export default Testimonial;