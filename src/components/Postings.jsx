import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookings.css';

const Postings = () => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    fetchPostings();
  }, []);

  const fetchPostings = async () => {
    try {
      const response = await axios.post('https://drive-together-backend.onrender.com/3001/myPostings', { userEmail: sessionStorage.getItem('email') }, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      }); 
      const data = response.data.data;
      setPostings(data);
    } catch (error) {
      alert('Error fetching Postings. Unauthorised access.');
    }
  };

  return (
    <div>
      <h2 className='post-heading'>My Postings</h2>
      {postings.length === 0 ? (
        <p className='no-data-message'>No data to display</p>
      ) : (
        <table className="postings-table">
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
            {postings.map(posting => (
              <tr key={posting._id}>
                <td>{posting.leavingFrom}</td>
                <td>{posting.goingTo}</td>
                <td>{posting.date}</td>
                <td>{posting.carName}</td>
                <td>{posting.numberOfSeats}</td>
                <td>{posting.price}</td>
                <td>{posting.postingId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Postings;
