import React, { useState } from "react";

import appartmentsImage from '../../assets/appartments.jpg';

export default function LoginComponent(props) {
    const styles = {
        input: "w-2/3 border-black border-2 p-2 m-3 rounded-xl",
        button: "w-1/3 border-black text-l border-2 p-2 m-2 rounded-md",
    }

    return (
        <div className="flex">
            <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${appartmentsImage})` }}></div>
            <div className="flex w-1/2 h-screen bg-white place-content-center">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className=" mb-6 text-6xl font-bold italic text-center w-full">{props.label}</h1>
                    <form className="flex flex-col w-4/5 items-center" onSubmit={props.handleSubmit}>
                        <input className={styles.input} name="username" type="text" placeholder="Username" onChange={(event) => props.setUsername(event.target.value)} />
                        {props.label === "Create Account" ? <input className={styles.input} name="confirmPassword" type="email" placeholder="Email" onChange={(event) => props.setEmail(event.target.value)} /> : null}
                        <input className={styles.input} name="password" type="password" placeholder="Password" onChange={(event) => props.setPassword(event.target.value)} />
                        {props.label === "Create Account" ? <input className={styles.input} name="confirmPassword" type="password" placeholder="Confirm Password" onChange={(event) => props.setConfirmPassword(event.target.value)} /> : null}
                        {props.label === "Create Account" && props.noMatch ? <p className="italic text-red-600">Passwords do not match</p> : null}
                        <button className={styles.button} type="submit">{props.label}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}