import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const userName = sessionStorage.getItem("username");

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
            <Link to="/logout">Logout</Link>
          </div>
        </li>
        <li className="username">{userName}</li>
      </ul>
    </>
  );
};

export default Navbar;
