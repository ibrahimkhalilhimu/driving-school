import React, { useEffect, useState } from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';


const Services = () => {
    const [courseData,setCourseData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then((response) => response.json())
        .then((data) => setCourseData(data));
    },[])
    console.log(courseData);
    return (
        <div className='services'>
            <div className="container text-center">
                <h1 className="titles">Our Services</h1>
                <div className="row">
    {/* <div className="col-md-6"> */}
    {
        courseData.length ===0 &&
       <div className="text-center mt-5">
          <div className="spinner-grow " role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </div>
       </div>
    }
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