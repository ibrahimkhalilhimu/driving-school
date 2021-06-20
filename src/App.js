import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/Auth/LogIn/LogIn';
import SignIn from './components/Auth/SignIn/SignIn';
import Book from './components/Dashboard/Customar/Book/Book';
import BookingList from './components/Dashboard/Customar/BookingList/BookingList';
import Reviews from './components/Dashboard/Customar/Review/Reviews';
import Profile from './components/Dashboard/Profile/Profile';
import CourseData from './components/Data/CourseData/CourseData';


export const UserCourseInfo = createContext()

function App() {

const [courseInfo,setCourseInfo] = useState({})


  return (
    <div className="App">
      <UserCourseInfo.Provider value={[courseInfo,setCourseInfo]} >
      <Router>
         <Switch>
           <Route exact path="/"> 
             <Home/>
             </Route>
             <Route path="/login"> 
               <LogIn/>
             </Route>
             <Route path="/signIn"> 
               <SignIn/>
             </Route>
             <Route path="/books/:_id"> 
             <Book/>
             </Route>
             <Route path="/books"> 
             <Book/>
             </Route>
             <Route path="/bookingList"> 
             <BookingList/>
             </Route>
             <Route path="/reviews"> 
             <Reviews/>
             </Route>
             <Route path="/profile"> 
             <Profile/>
             </Route>
         </Switch>
      </Router>

      </UserCourseInfo.Provider>

    </div>
  );
}

export default App;
