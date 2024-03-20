import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to access the navigate function

    async function loginUser(credentials) {
        return fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to login');
                }
                return response.json();
            });
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const user = await loginUser({
                username,
                password
            });
            props.setUser(user);
            navigate('/home');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <LoginComponent label={"Login"} setUsername={setUsername} setPassword={setPassword} handleSubmit={handleSubmit} />
        </div>
    );
}