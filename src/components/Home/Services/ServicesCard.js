import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { userCardInfo, userContext } from '../../../App';

const ServicesCard = ({data}) => {
    const {img,id,title,price,description,_id,image} = data;
    console.log(data);

const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin] = useContext(userContext)
const [courseInfo,setCourseInfo] = useContext(userCardInfo)

    let history = useHistory();
    const handleUser=()=>{
      if(isAdmin){
        history.push(`/orderList`)
      }else{
        history.push(`/books`)
      }

     
    
       }
    const handleCardInfo = (img,title,price,description,image)=>{
      setCourseInfo({img,title,price,description,image })
    }

    return (
 <div 

onClick={()=> {handleCardInfo(img,title,price,description,image);
 
 handleUser()

  
  }}
   className="col-md-4">
 <div className="card">
   {
     image ? <img src={`data:image/png;base64,${image.img}`} className="rounded-circle mx-auto" alt="..."/>:
     <img src={img} className="rounded-circle mx-auto" alt="..."/>
   }
       
   <div className="card-body">
       <h3 className="card-title">{title}</h3>
       <p className="card-text">{description}</p>
      < h4>${price}</h4>

   </div>
      </div>
 </div>
    );
};

export default ServicesCard;