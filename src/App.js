import { createContext, useState } from 'react';
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


export const userContext = createContext()

function App() {

const [courseInfo,setCourseInfo] = useState({})
const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <div className="App">
      <userContext.Provider value={[courseInfo,setCourseInfo,loggedInUser,setLoggedInUser]} >
      <Router>
         <Switch>
           <Route exact path="/"> 
             <Home/>
             </Route>
             <Route path="/books/:_id"> 
             <Book/>
             </Route>
             {/* <PrivateRoute path="/books"> 
             <Book/>
             </PrivateRoute> */}
             <Route path="/bookingList"> 
             <BookingList/>
             </Route>
             <Route path="/reviews"> 
             <Reviews/>
             </Route>
             <Route path="/profile"> 
             <Profile/>
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

    </div>
  );
}

export default App;
