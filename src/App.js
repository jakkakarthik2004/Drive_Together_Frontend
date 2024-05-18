// import './App.css';
// import Navbar from './components/Navbar';
// import { Switch, Route } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
// import Posted from './components/Posted';
// import Post from './components/Post';
// import Book from './components/Book';
// import MakeBooking from './components/MakeBooking';
// import Postings from './components/Postings';
// import Bookings from './components/Bookings';
// import MyProfile from './components/MyProfile';
// import About from './components/About';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/home">
//           <Home />
//         </Route>
//         <ProtectedRoute exact path="/postride" component={Post} />
//         <ProtectedRoute exact path="/postedride" component={Posted} />
//         <ProtectedRoute exact path="/bookcar" component={Book} />
//         <ProtectedRoute exact path="/makeBooking" component={MakeBooking} />
//         <Route exact path="/login">
//           <Login />
//         </Route>
//         <Route exact path="/register">
//           <Register />
//         </Route>
//         <ProtectedRoute exact path="/myPostings" component={Postings} />
//         <ProtectedRoute exact path="/myProfile" component={MyProfile} />
//         <ProtectedRoute exact path="/myBookings" component={Bookings} />
//         <Route exact path="/about">
//           <About />
//         </Route>
//       </Switch>
//     </>
//   );
// }

// export default App;





import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <ProtectedRoute exact path="/postride" component={Post} />
        <ProtectedRoute exact path="/postedride" component={Posted} />
        <ProtectedRoute exact path="/bookcar" component={Book} />
        <ProtectedRoute exact path="/makeBooking" component={MakeBooking} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <ProtectedRoute exact path="/myPostings" component={Postings} />
        <ProtectedRoute exact path="/myProfile" component={MyProfile} />
        <ProtectedRoute exact path="/myBookings" component={Bookings} />
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
