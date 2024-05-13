import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookings.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.post('http://localhost:3001/myBookings', { userEmail: sessionStorage.getItem('email') }, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }); 
      const data = response.data.data;
      setBookings(data);
    } catch (error) {
      alert('Error fetching bookings. Unauthorised access.');
    }
  };

  return (
    <div>
      <h2 className="post-heading">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className='no-data-message'>No data to display</p>
      ): (
        <table className="bookings-table">
        <thead>
          <tr>
            <th>Leaving From</th>
            <th>Going To</th>
            <th>Date</th>
            <th>Car Name</th>
            <th>Number of Seats</th>
            <th>Price</th>
            <th>Posting ID</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.leavingFrom}</td>
              <td>{booking.goingTo}</td>
              <td>{booking.date}</td>
              <td>{booking.carName}</td>
              <td>{booking.numberOfSeats}</td>
              <td>{booking.price}</td>
              <td>{booking.postingId}</td>
            </tr>
          ))}
        </tbody>
        </table>
      )}
    </div>
  );
};

export default Bookings;
