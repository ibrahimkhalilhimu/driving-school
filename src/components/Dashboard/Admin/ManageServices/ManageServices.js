import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TableLoader from '../../Loader/TableLoader/TableLoader';
import ManageServicesCard from './ManageServicesCard';
const ManageServices = () => {
    const [manageService,setManageService] = useState([])
    const [loader,setLoader] = useState(true)
   
    useEffect(()=>{
        fetch('https://glacial-peak-56892.herokuapp.com/courses')
        .then(res => res.json())
        .then(data=>{
            setManageService(data)
            setLoader(false)
        })
      },[])

    



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
    manageService.map(data=><ManageServicesCard data={data} key={data.id}></ManageServicesCard> )
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