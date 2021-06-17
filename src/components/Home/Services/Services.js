import React, { useState } from 'react';
import CourseData from '../../Data/CourseData/CourseData';
import './Services.css'
import ServicesCard from './ServicesCard';


const Services = () => {
    const [courseData,setCourseData] = useState(CourseData);
    return (
        <div className='services'>
            <div className="container text-center">
                <h1 className="titles">Our Services</h1>
                <div className="row">
    {/* <div className="col-md-6"> */}
    {
            courseData.map(data => <ServicesCard data={data} key={data.id}></ServicesCard>) 

            }
    {/* </div> */}
             

          
                </div>
            </div>
        </div>
    );
};

export default Services;