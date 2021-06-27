import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TableLoader from '../../Loader/TableLoader/TableLoader';
import { AiOutlineDelete } from "react-icons/ai";
import swal from 'sweetalert';

const OrderList = () => {

    const [orderList,setOderList] = useState([])
const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data=>{
          setOderList(data)
          setLoader(false)
        })
      },[])
      console.log(orderList);

      const handleClickDelete= (e,_id)=>{
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            fetch(`http://localhost:5000/deleteOrder/${_id}`,{
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
        <div className="orderList">
            <Sidebar></Sidebar>
            <section className=" mt-5 p-4">
    <div className="fromSection  table-responsive">
 {
   loader? <TableLoader/>: 
   <table className="table  table-hover table-borderless">
   <thead class="table-light">
     <tr>
       <th scope="col">Name</th>
       <th scope="col">Email ID</th>
       <th scope="col">Pay With</th>
       <th scope="col">Status</th>
       <th scope="col">Action</th>
     </tr>
   </thead>
   <tbody>
 {
     orderList.map(data=>
         <tr>
       <td>{data.name}</td>
       <td>{data.email}</td>
       <td>Visa</td>
       <td>
       <select
       className="btn btn-danger"
 >
 <option className="bg-white text-muted ">Pending</option>
 <option className="bg-white text-muted">On going</option>
 <option className="bg-white text-muted">Done</option>
 </select>
 
       </td>
       <td>
         <AiOutlineDelete  onClick={(e) =>handleClickDelete(e,data._id)} color="red" size="35px" cursor="pointer"/>
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

export default OrderList;