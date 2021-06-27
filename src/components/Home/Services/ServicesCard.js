import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { userCardInfo, userContext } from '../../../App';

const ServicesCard = ({data}) => {
    const {img,id,title,price,description,_id} = data;

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
    const handleCardInfo = (img,title,price,description)=>{
      setCourseInfo({img,title,price,description})
    }

    return (
 <div 

onClick={()=> {handleCardInfo(img,title,price,description);
 
 handleUser()

  
  }}
   className="col-md-4">
 <div className="card">
       <img src={img} className="rounded-circle mx-auto" alt="..."/>
   <div className="card-body">
       <h3 className="card-title">{title}</h3>
       <p className="card-text">{description}</p>
      < h4>${price}</h4>
      {/* <Link 
      to={isAdmin ? "/orderList" : "/books"}
      >
      <button 

onClick={()=> {handleCardInfo(img,title,price,description);
 
 // handleUser()

  
  }}
      className="btn btn-primary">Add Course</button>
      </Link> */}

   </div>
      </div>
 </div>
    );
};

export default ServicesCard;