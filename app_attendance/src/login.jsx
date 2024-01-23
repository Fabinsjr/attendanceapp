import React, {useState } from "react";
import "./login.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault()
        axios.post('mongodb://localhost:27017/login', {username,password})
        .then(result => {
            console.log(result)
            if(result.data==="Successfully logged in."){
                navigate('/home')
                }
        })
        .catch(err => console.log(err))
       /* if (username === 'vimukthi' && password === 'admin2023') {
            setError('');
            navigate('/database');
        }
        else {
            setError('Invalid username or password');
            alert("Login Failed");
        }*/
    };


    return (
        <center>
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </center>
    )
};

export default Login;