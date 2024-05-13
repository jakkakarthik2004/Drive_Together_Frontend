import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Posted from './components/Posted';
import Post from './components/Post';
import Book from './components/Book';
import MakeBooking from './components/MakeBooking';
import Postings from './components/Postings';
import Bookings from './components/Bookings';
import MyProfile from './components/MyProfile';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/postride'>
          <Post />
        </Route>
        <Route exact path='/postedride'>
          <Posted />
        </Route>
        <Route exact path='/bookcar'>
          <Book />
        </Route>
        <Route exact path='/makeBooking'>
          <MakeBooking />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/myPostings'>
          <Postings />  
        </Route>
        <Route exact path='/myProfile'>
          <MyProfile />  
        </Route>
        <Route exact path='/myBookings'>
          <Bookings />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
