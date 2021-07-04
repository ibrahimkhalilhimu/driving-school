import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AddService.css'
import { AiOutlineCloudUpload } from "react-icons/ai";
import swal from 'sweetalert'
import { useForm } from "react-hook-form";




const AddService = () => {


    const [file, setFile] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data); 
         const CourseData = {
            title: data.title,
            price: data.price,
            description: data.description,
            img: file
        };
        console.log('CourseData', CourseData)

        fetch('https://glacial-peak-56892.herokuapp.com/addCourses', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(CourseData)
          })
          .then(response => response.json())
          .then(data => {
            if(data){
            swal("Add Course Successfully!", "Your Add Course Successfully!", "success");

            }
          })
          .catch(error => {
              console.log(error);
            swal("Sorry!", "Please Fill out the form or Right Data below!", "error");
          })


    }

    

    const handleFileChange = (e) => {
        const imageData = new FormData();
        imageData.set('key','a70bb52e5c0b20cb328344374818d3f9');
        imageData.append('image',e.target.files[0])

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
          })
          .then(response => response.json())
          .then(data => {
         
            setFile(data.data.display_url)
          console.log(data.data.display_url);
          })
          .catch(error => {
           console.log(error);
          })
    }


    // const handleSubmit = (e) =>{
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     formData.append('title', info.title)
    //     formData.append('description', info.description)
    //     formData.append('price', info.price)
    //     fetch('https://glacial-peak-56892.herokuapp.com/addCourses', {
    //         method: 'POST',
    //         body: formData
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         if(data){
    //         swal("Add Course Successfully!", "Your Add Course Successfully!", "success");

    //         }
    //       })
    //       .catch(error => {
    //         swal("Sorry!", "Please Fill out the form or Right Data below!", "error");
    //       })
    //     e.preventDefault();
    // }

    return (

        <div className="addService">
            <Sidebar></Sidebar>
            <section className="mt-5 p-4">

                <form className="W-100" onSubmit={handleSubmit(onSubmit)} >
                <div className="py-5 mx-auto mt-5 bg-white" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                <div className="row justify-content-center">
                <div  className="col-md-5 form-group">
                <label className="form-label fs-4 fw-bold">Service Title</label>
                <input type="text" 
                 
                    name="title" 
                    className="form-control "
                    placeholder="Enter Title"
                    {...register("title", {required: true})}
     />
                    </div>
                    <div  className="col-md-5 form-group ">
                    <label className="form-label fs-4 fw-bold">Price</label>
                     <input type="number" 
                      style={{ maxWidth: "270px" }}
                     name="price" 
                     {...register("price", {required: true})}
                    className="form-control "
                    placeholder="Enter Price"
                   
     />
                    </div>
                    <div className="col-md-5 form-group mt-3">
                    <label className="form-label fs-4 fw-bold">Description</label>
                        <textarea style={{height:"121px"}} type="text" 
                         
                    name="description" 
                    {...register("description", {required: true})}
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