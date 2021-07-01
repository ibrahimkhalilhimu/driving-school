import React, { useEffect, useState } from 'react';
import ImageGrid from '../../Dashboard/Loader/ImageGrid/ImageGrid';
import './Services.css'
import ServicesCard from './ServicesCard';


const Services = () => {
    const [courseData,setCourseData] = useState([]);
    useEffect(() => {
        fetch('https://glacial-peak-56892.herokuapp.com/courses')
        .then((response) => response.json())
        .then((data) => setCourseData(data));
    },[])
    console.log(courseData);
    return (
        <div id="Services" className='services'>
            <div className="container text-center">
                <h1 className="titles">Our Services</h1>
                <div className="row">
    {/* <div className="col-md-6"> */}
    {
        courseData.length ===0 &&
     <ImageGrid/>
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