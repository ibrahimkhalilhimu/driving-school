import React, { useContext, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { userCardInfo } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import swal from 'sweetalert'

const EditService = () => {

    const [courseInfo,setCourseInfo, editService,setEditService] = useContext(userCardInfo)
    const {_id,title,img,description,price,image} = editService
    console.log(editService);
    const [editImage, setEditImage] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const updateData = {
            title: data.title,
            price: data.price,
            description: data.description,
            img: editImage
        };
        console.log('service Data', updateData)

        fetch(`https://glacial-peak-56892.herokuapp.com/update/${_id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then( result => {
            console.log(result);
            if (result) {
                swal("Update Successfully!", "Your Update Successfully!", "success");
            
            }
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
         
          setEditImage(data.data.display_url)
          console.log(data.data.display_url);
          })
          .catch(error => {
           console.log(error);
          })
    }



    return (
        <div className="editService">
              <Sidebar></Sidebar>
            <section className="mt-5 p-4">

                <form className="W-100" onSubmit={handleSubmit(onSubmit)} >
                <div className="py-5 mx-auto mt-5 bg-white" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                <div className="row justify-content-center">
                <div  className="col-md-5 form-group">
                <label className="form-label fs-4 fw-bold">Service Title</label>
                <input type="text" 
                 
                    name="title" 
                    {...register("title", {required: true})}
                    className="form-control "
                    placeholder="Enter Title"
                    defaultValue={title}
                 
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
                    defaultValue={price}
     />
                    </div>
                    <div className="col-md-5 form-group mt-3">
                    <label className="form-label fs-4 fw-bold">Description</label>
                        <textarea style={{height:"121px"}} type="text" 
                         
                    name="description" 
                    {...register("description", {required: true})}
                   
                    className="form-control "
                    placeholder="Enter Designation"
                    defaultValue={description}
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
                //  defaultValue={img || image}
               />
               <label className="btn uploadImage" htmlFor="file">
               <AiOutlineCloudUpload size="24"/>  Upload image
               </label>
        
                    </div>
</div>
                    <div className="form-group text-center" >
                        
                        <button type="submit" className="btn bg-success text-white mt-3">Update</button>
                      
                    </div>


</div>
               
                </form>
    





            </section>
        </div>
    );
};

export default EditService;