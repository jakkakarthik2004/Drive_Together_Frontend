import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Post = () => {
  const history = useHistory();

  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [date, setDate] = useState('');
  const [carName, setCarName] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [price, setPrice] = useState('');
  const [postedRide, setPostedRide] = useState(null);
  const email = sessionStorage.getItem('email');
  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'leavingFrom') {
      setLeavingFrom(value);
    } else if (name === 'goingTo') {
      setGoingTo(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'carName') {
      setCarName(value);
    } else if (name === 'numberOfSeats') {
      setNumberOfSeats(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  const postride = () => {
    const postingId = Math.floor(100000 + Math.random() * 900000);
    const data = { leavingFrom, goingTo, date, carName, numberOfSeats, price, postingId, email };
    axios.post('https://drive-together-backend.onrender.com/3001/postride', data, {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setPostedRide(response.data); 
          history.push({
            pathname: '/postedride',
            state: { postedRide: response.data.data } 
          });
        }
      })
      .catch((error) => {
        alert('Error posting ride. Unauthorised access.');
      });
  };
  

  return (
    <div className="post-container">
      <h1>Post a ride!!!</h1>
      <input type="text" name="leavingFrom" placeholder="Leaving from" onChange={handleInput} />
      <input type="text" name="goingTo" placeholder="Going to" onChange={handleInput} />
      <input type="date" name="date" placeholder="Date and Time" onChange={handleInput} />
      <input type="text" name="carName" placeholder="Car name" onChange={handleInput} />
      <input type="number" name="numberOfSeats" placeholder="Number of seats" min="0" onChange={handleInput} />
      <input type="text" name="price" placeholder="Price" onChange={handleInput} />
      <button onClick={postride}>Post</button>
    </div>
  );
};

export default Post;
