import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";

export default function CreateAccount(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [noMatch, setNoMatch] = useState(false);

    const navigate = useNavigate(); // Hook to access the navigate function

    async function signupUser(credentials) {
        return fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to signup');
                }
                return response.json();
            });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Creating Account');
        if (password !== confirmPassword) {
            setNoMatch(true);
        } 
        else {
            setNoMatch(false);
            try {
                const user = await signupUser({
                    username,
                    password,
                    email
                });
                props.setUser(user);
                navigate('/home');
            }
            catch (error) {
                alert(error);
            }
        }
    }

    return (
        <div>
            <LoginComponent label={"Create Account"} handleSubmit={handleSubmit} setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} noMatch={noMatch}/>
        </div>
    );
}