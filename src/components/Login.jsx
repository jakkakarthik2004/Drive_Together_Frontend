import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const handleInput = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const getData = () => {
        const data = { email, password }
        axios.post("http://localhost:3001/login", data)
            .then(response => {
                if(response.data.status === false) {
                    alert(response.data.message);
                }
                else {
                    sessionStorage.setItem('username', response.data.user);
                    sessionStorage.setItem('email', response.data.email);
                    sessionStorage.setItem('phone', response.data.phone);
                    localStorage.setItem('token', response.data.token);
                    history.push('/home')
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" name="email" onChange={handleInput} autoComplete="off" />
                <input type="password" placeholder="Password" name="password" onChange={handleInput} autoComplete="off" />
                <button onClick={getData}>Log in</button>
            </div>
        </>
    );
};

export default Login;