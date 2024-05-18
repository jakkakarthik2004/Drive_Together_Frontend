import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';

const Register = () => {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'Name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        } else if (name === 'phone') {
            setPhone(value);
        }
    };

    const pushData = () => {
        if(Name === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
            toast.error("Please fill in all fields!!", {
                transition: Slide,
                className: "custom-toast",
              });
            return;
        }
        else if(password !== confirmPassword) {
            toast.error("Passwords do not match!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else if(phone.length !== 10){
            toast.error("Please enter a valid phone number!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            toast.error("Please enter a valid email address!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else {
            const data = { Name, email, password, confirmPassword, phone };
            axios
                .post('https://drive-together-backend.onrender.com/register', data)
                .then((response) => {
                    if (response.data.success === false) {
                        toast.error(response.data.message, {
                            transition: Slide,
                            className: "custom-toast",
                        })
                    } else {
                        toast.success("Login successful!", {
                            transition: Slide,
                            className: "custom-toast",
                          });
                        history.push('/login');
                    }
                })
                .catch((error) => {
                    console.error(error);
            });
        }
        
    };

    return (
        <>
            <div className="register">
                <h1>Register</h1>
                <input type="text" name="Name" placeholder="Name" onChange={handleInput} autoComplete="off" required />
                <input type="email" name="email" placeholder="Email" onChange={handleInput} autoComplete="off" required />
                <input type="password" name="password" placeholder="Password" onChange={handleInput} autoComplete="off" required />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    autoComplete="off"
                    required
                />
                <input type="text" name="phone" placeholder="Phone" onChange={handleInput} autoComplete="off" required />
                <button onClick={pushData}>Register</button>
            </div>
        </>
    );
};

export default Register;
