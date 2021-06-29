import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TableLoader from '../../Loader/TableLoader/TableLoader';
import swal from 'sweetalert';
const ManageServices = () => {
    const [manageService,setManageService] = useState([])
    const [loader,setLoader] = useState(true)
   
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data=>{
            setManageService(data)
            setLoader(false)
        })
      },[])

      const handleClickDelete= (e,_id)=>{
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            fetch(`http://localhost:5000/deleteCourse/${_id}`,{
              method:'DELETE',
          })
          .then(res => res.json())
          .then(result =>{
              console.log(result);
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
              // alert('delete success')
              e.target.parentNode.parentNode.style.display = 'none'
              console.log( e.target.parentNode.parentNode);
          })
          }
        });
  
      }
  



    return (
        <div className="manageServices">
            <Sidebar></Sidebar>
            <section className="mt-5 p-4">
            <div className="fromSection table-responsive w-100">
              {
                loader ? <TableLoader/>:
                
                <table className="table  table-hover table-borderless responsive">
  <thead class="table-light">
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{
    manageService.map(data=>
        <tr>
        
      <td >{data.title}</td>
      <td >{data.description.slice(0,50)}..</td>
      <td>${data.price}</td>
      <td>
<button onClick={(e) =>handleClickDelete(e,data._id)} className="btn btn-danger">Delete</button>

      </td>
    </tr>
    )
}


    </tbody>
    </table>
               
              }
      
            </div>
            </section>
        </div>
    );
};

export default ManageServices;