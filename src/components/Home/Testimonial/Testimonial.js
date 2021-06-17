import React, { useState } from 'react';
import ReviewData from '../../Data/ReviewsData/ReviewsData';
import './Testimonial.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Lazy, Autoplay,Keyboard, Pagination,Navigation  } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from './TestimonialCard';

// install Swiper modules
SwiperCore.use([Lazy,Autoplay,Keyboard, Pagination,Navigation]);


const Testimonial = () => {

    const [reviewsData,setReviewsData] = useState(ReviewData)
    return (
        <div className="testimonial" id="testimonial">
            <div className="container text-center">
                <h1 className="title-testi">What Our Clients are saying</h1>
             
<div className="row">
                <Swiper
                
                            slidesPerView={1}
                            spaceBetween={10}
                            // loop={true}
                            keyboard={{
                                "enabled": true
                            }}
                            autoHeight={true}
                            pagination={{
                                "clickable": true
                            }}
                            navigation={true}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                            }}
                            lazy={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }
                            }} className="mySwiper">




{
            reviewsData.map(testimonial => {
                return (
                    <SwiperSlide>
                   <TestimonialCard {...testimonial}/>
                </SwiperSlide>
    
   
              
              )
            }

                )
        } 

                       </Swiper>
    
</div>     
</div>
</div>

         
    );
};

export default Testimonial;