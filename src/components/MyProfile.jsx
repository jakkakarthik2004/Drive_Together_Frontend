import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userEmail = sessionStorage.getItem('email');
    const fetchUserData = async () => {
      try {
        const response = await axios.post('https://drive-together-backend.onrender.com/3001/userProfile', { userEmail }, {
          headers: {
            'auth-token': localStorage.getItem('token')
          }
        });
        setUserData(response.data.data);
      } catch (error) {
        alert('Error fetching user data. Unauthorised access.');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="my-profile">
      <h1>My Profile</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{userData.userDetails && userData.userDetails.Name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{userData.userDetails && userData.userDetails.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{userData.userDetails && userData.userDetails.phone}</td>
          </tr>
          <tr>
            <td>Total Bookings:</td>
            <td>{userData.totalBookings}</td>
          </tr>
          <tr>
            <td>Total Postings:</td>
            <td>{userData.totalPostings}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
