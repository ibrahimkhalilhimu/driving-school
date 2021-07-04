import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userCardInfo } from '../../../../App';
import swal from 'sweetalert';
const ManageServicesCard = ({data}) => {
    const [courseInfo,setCourseInfo, editService,setEditService] = useContext(userCardInfo)

    const UpdateService =(_id)=>{
        setEditService(data)
      }



      const handleClickDelete= (e,_id)=>{
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            fetch(`https://glacial-peak-56892.herokuapp.com/deleteCourse/${_id}`,{
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
        <>
               
        <tr>
        
        <td >{data.title}</td>
        <td >{data.description.slice(0,50)}..</td>
        <td>${data.price}</td>
        <td>
          <Link to="/editService">
          
          <button style={{marginRight:"10px"}} onClick={UpdateService} className="btn btn-success">Edit</button>
          
          </Link>
        
  <button onClick={(e) =>handleClickDelete(e,data._id)} className="btn btn-danger">Delete</button>
  
        </td>
      </tr> 
        </>
    );
};

export default ManageServicesCard;