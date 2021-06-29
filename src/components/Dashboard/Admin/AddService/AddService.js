import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AddService.css'
import { AiOutlineCloudUpload } from "react-icons/ai";
import swal from 'sweetalert'
const AddService = () => {



    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
    }


    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)
        formData.append('price', info.price)
        fetch('http://localhost:5000/addCourses', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            if(data){
            swal("Add Course Successfully!", "Your Add Course Successfully!", "success");

            }
          })
          .catch(error => {
            swal("Sorry!", "Please Fill out the form or Right Data below!", "error");
          })
        e.preventDefault();
    }

    return (

        <div className="addService">
            <Sidebar></Sidebar>
            <section className="mt-5 p-4">

                <form className="W-100" onSubmit={handleSubmit} >
                <div className="py-5 mx-auto mt-5 bg-white" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                <div className="row justify-content-center">
                <div  className="col-md-5 form-group">
                <label className="form-label fs-4 fw-bold">Service Title</label>
                        <input type="text" 
                         onBlur={handleBlur}
                    name="title" 
                    className="form-control "
                    placeholder="Enter Title"
                 
     />
                    </div>
                    <div  className="col-md-5 form-group ">
                    <label className="form-label fs-4 fw-bold">Price</label>
                        <input type="number" 
                          style={{ maxWidth: "270px" }}
                    name="price" 
                     onBlur={handleBlur}
                    className="form-control "
                    placeholder="Enter Price"
                   
     />
                    </div>
                    <div className="col-md-5 form-group mt-3">
                    <label className="form-label fs-4 fw-bold">Description</label>
                        <textarea style={{height:"121px"}} type="text" 
                         
                    name="description" 
                     onBlur={handleBlur}
                    className="form-control "
                    placeholder="Enter Designation"
                  
     />
                    </div>
                    <div  className="col-md-5 form-group mt-3">
                <label className="form-label fs-4 fw-bold">Image</label>
                 <input 
                  hidden="hidden"
                  name="img"
                  onChange={handleFileChange}
                 id="file"  
                 type="file"
                
               />
               <label className="btn uploadImage" htmlFor="file">
               <AiOutlineCloudUpload size="24"/>  Upload image
               </label>
        
                    </div>
</div>
                    <div className="form-group text-center" >
                        <button type="submit" className="btn bg-success text-white mt-3">Submit</button>
                    </div>


</div>
               
                </form>
    





            </section>
        </div>
    );
};

export default AddService;