
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const username = sessionStorage.getItem('username');
  const history = useHistory();
  
  const bookCar = () => {
    history.push("/bookcar");
  }
  
  const postCar = () => {
    history.push("/postride");
  }
  
  return (
    <>
    <div className="background-image"></div>
    <div className="home-container">
      <div className="content">
        <h1>Welcome, {username}!</h1>
        <button onClick={bookCar}>Book a Car</button>
        <button onClick={postCar}>Post a Ride</button>
      </div>
    </div>
    </>
  );
}

export default Home;
