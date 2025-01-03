// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <img src="/images/login.png" alt="Login" className="page-image" />
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={onChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={onChange} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;