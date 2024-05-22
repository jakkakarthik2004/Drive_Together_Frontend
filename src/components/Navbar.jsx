import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const userName = sessionStorage.getItem("username");

  const history = useHistory();

  // const handleLogout = () => {
  //   console.log('Logout button clicked');
  //   localStorage.clear();
  //   alert('Logged out successfully');
  //   console.log('All items removed from localStorage');
  //   history.push('/login');
  // };

  const handleLogout = () => {
    console.log('Logout button clicked');
    console.log('Current localStorage before removal:', localStorage.getItem('auth-token'));
    localStorage.clear();
    sessionStorage.clear();
    console.log('Current localStorage after removal:', localStorage.getItem('auth-token'));
    toast.success('Logout successful!', {
      // position: toast.POSITION.TOP_CENTER,
      transition: Slide,
      className: 'custom-toast'
    });
    history.push('/login');
  };
  

  return (
    <>
      <ul className="navbar">
        <li className="logo" style={{ display: "flex", alignItems: "center" }}>
          <IoCarSportOutline
            size={50}
            style={{ marginBottom: "5px", marginRight: "5px" }}
          />
          Drive Together
        </li>
        <li>
          <Link to="/home">
            <BiHomeAlt2 />
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            <IoLogInOutline />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li className="dropdown">
          <button
            className="dropbtn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <VscAccount size={25} style={{ marginRight: "5px" }} />
            My Account
          </button>
          <div className="dropdown-content">
            <Link to="/myProfile">My Profile</Link>
            <Link to="/myPostings">My Postings</Link>
            <Link to="/myBookings">My Bookings</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </li>
        <li className="username">{userName}</li>
      </ul>
    </>
  );
};

export default Navbar;
