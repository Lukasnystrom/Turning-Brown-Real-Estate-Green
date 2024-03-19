import React, { useState } from "react";

import LoginComponent from "./components/LoginComponent";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleAccountCreation(event) {
        event.preventDefault();
        console.log('Creating Account');
        console.log(email);
        console.log(password);
        console.log('Account Created');

    }

    return (
        <div>
            <LoginComponent setEmail={setEmail} setPassword={setPassword} handleAccountCreation={handleAccountCreation} />
        </div>
    );
}