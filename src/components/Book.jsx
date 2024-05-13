import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CgArrowsExchange } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

const Book = () => {
  const history = useHistory();

  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [date, setDate] = useState("");
  const [bookedData, setBookedData] = useState(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'leavingFrom') {
      setLeavingFrom(value);
    } else if (name === 'goingTo') {
      setGoingTo(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const handleBookRide = (index, booking) => {
    history.push({
      pathname: '/makeBooking',
      state: { bookedCar: booking }
    });
  };
  
  const bookCar = () => {
    const data = { leavingFrom, goingTo, date };
    axios.post('https://drive-together-backend.onrender.com/3001/bookcar', data, {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.message);
        } else {
          setBookedData(response.data); 
        }
      })
      .catch((error) => {
        alert('Error booking ride. Unauthorised access.');
      });
  };

  return (
    <div className="book-container">
      <h1>Book a Car</h1>
      <div className="input-container">
        <input type="text" name='leavingFrom' placeholder="Leaving from" onChange={handleInput} />
        <CgArrowsExchange size={32} />
        <input type="text" name='goingTo' placeholder="Going to" onChange={handleInput} />
        <input type="date" name='date' placeholder="Date and Time" onChange={handleInput} />
        <button onClick={bookCar}><FaSearch /> Search</button>
      </div>

      {bookedData && bookedData.data && (
        <div className="booked-table-container">
          <h2>Available Cars Details</h2>
          <table className="booked-table">
            <thead>
              <tr>
                <th>Posting Id</th>
                <th>Leaving From</th>
                <th>Going To</th>
                <th>Date</th>
                <th>Car Name</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookedData.data.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.postingId}</td>
                  <td>{booking.leavingFrom}</td>
                  <td>{booking.goingTo}</td>
                  <td>{booking.date}</td>
                  <td>{booking.carName}</td>
                  <td>{booking.price}</td>
                  <td>{booking.remainingSeats}</td>
                  <td><button onClick={() => handleBookRide(index, booking)}>Book Ride</button></td> {/* Book Ride button */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Book;
