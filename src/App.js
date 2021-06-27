import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from './components/Auth/LogIn/LogIn';
import SignIn from './components/Auth/SignIn/SignIn';
import Book from './components/Dashboard/Customar/Book/Book';
import BookingList from './components/Dashboard/Customar/BookingList/BookingList';
import Reviews from './components/Dashboard/Customar/Review/Reviews';
import Profile from './components/Dashboard/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/Admin/OrderList/OrderList';
import ManageServices from './components/Dashboard/Admin/ManageServices/ManageServices';


export const userContext = createContext()
export const userCardInfo = createContext()
function App() {

const [courseInfo,setCourseInfo] = useState({})
const [loggedInUser,setLoggedInUser] = useState({success: false})
const [isAdmin,setIsAdmin] = useState(false)



  return (


    <div className="App">
      <userCardInfo.Provider value={[courseInfo,setCourseInfo]}>
      <userContext.Provider value={[loggedInUser,setLoggedInUser,isAdmin,setIsAdmin]} >
      <Router>
         <Switch>
           <Route exact path="/"> 
             <Home/>
             </Route>
             <PrivateRoute path="/books"> 
             <Book/>
             </PrivateRoute>
             {/* <PrivateRoute path="/books"> 
             <Book/>
             </PrivateRoute> */}
             <PrivateRoute path="/bookingList"> 
             <BookingList/>
             </PrivateRoute>
             <Route path="/reviews"> 
             <Reviews/>
             </Route>
             <PrivateRoute path="/profile"> 
             <Profile/>
             </PrivateRoute>
             <Route path="/makeAdmin"> 
             <MakeAdmin/>
             </Route>
             <Route path="/orderList"> 
             <OrderList/>
             </Route>
             <Route path="/manageServices"> 
             <ManageServices/>
             </Route>
             <Route path="/login"> 
               <LogIn/>
             </Route>
             <Route path="/signIn"> 
               <SignIn/>
             </Route>
         </Switch>
      </Router>

      </userContext.Provider>
      </userCardInfo.Provider>
    </div>
  );
}

export default App;
