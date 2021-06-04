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

function App() {
  return (
    <div className="App">
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
             <Route path="/books"> 
             <Book/>
             </Route>
             <Route path="/bookingList"> 
             <BookingList/>
             </Route>
             <Route path="/reviews"> 
             <Reviews/>
             </Route>
         </Switch>
      </Router>
     
    </div>
  );
}

export default App;
