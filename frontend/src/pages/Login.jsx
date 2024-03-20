import React, { useState } from "react";

import LoginComponent from "./components/LoginComponent";

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(credentials) {
        return fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json());
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const username = email;
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        props.setToken(token);
        
    }

    return (
        <div>
            <LoginComponent label={"Login"} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />
        </div>
    );
}