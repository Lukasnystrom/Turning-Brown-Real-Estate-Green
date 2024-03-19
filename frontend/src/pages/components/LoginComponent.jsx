import React, { useState } from "react";

import appartmentsImage from '../../assets/appartments.jpg';

export default function LoginComponent(props) {
    const styles = {
        input: "w-2/3 border-black border-2 p-2 m-3 rounded-xl",
        button: "w-1/3 bg-black text-white p-2 m-2 rounded-md"
    }

    return (
        <div className="flex">
            <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${appartmentsImage})` }}></div>
            <div className="flex w-1/2 h-screen bg-white place-content-center">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className=" mb-6 text-5xl font-bold italic text-center w-full">Create Account</h1>
                    <form className="flex flex-col w-4/5 items-center" onSubmit={props.handleAccountCreation}>
                        <input className={styles.input} name="email" type="email" placeholder="Email" onChange={(event) => props.setEmail(event.target.value)} />
                        <input className={styles.input} name="password" type="password" placeholder="Password" onChange={(event) => props.setPassword(event.target.value)} />
                        <button className={styles.input} type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}