import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TableLoader from '../../Loader/TableLoader/TableLoader';

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
console.log(manageService);
    return (
        <div className="manageServices">
            <Sidebar></Sidebar>
            <section className="mt-5 p-4">
            <div className="fromSection table-responsive">
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
<button className="btn btn-danger">Delete</button>

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