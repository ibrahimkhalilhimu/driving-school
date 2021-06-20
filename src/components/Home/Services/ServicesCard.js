import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userCardInfo, userContext } from '../../../App';

const ServicesCard = ({data}) => {
    const {img,id,title,price,description,_id} = data;

// const [loggedInUser,setLoggedInUser] = useContext(userContext)
const [courseInfo,setCourseInfo] = useContext(userCardInfo)

    let history = useHistory();
    const handleUser=()=>{

      history.push('/books')
    
       }
    const handleCardInfo = (img,title,price,description)=>{
      setCourseInfo({img,title,price,description})
    }

    return (
    
 <div  onClick={()=> {handleCardInfo(img,title,price,description);
  
  handleUser()

   
   }}
   className="col-md-4">
 <div className="card">
       <img src={img} className="rounded-circle mx-auto" alt="..."/>
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