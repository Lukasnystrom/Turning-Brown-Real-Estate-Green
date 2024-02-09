import React from "react";

import appartmentsImage from '../assets/appartments.jpg';

const style = {
    input: "w-2/3 border-black border-2 p-2 m-3 rounded-xl",
    button: "w-1/3 bg-black text-white p-2 m-2 rounded-md"
}

export default function CreateAccount() {
    return (
        <div className="flex">
            <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${appartmentsImage})` }}></div>
            <div className="flex w-1/2 h-screen bg-white place-content-center">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className=" mb-6 text-5xl font-bold italic text-center w-full">Create Account</h1>
                    <form className="flex flex-col w-4/5 items-center">
                        <input className={style.input} type="email" placeholder="Email" />
                        <input className={style.input} type="password" placeholder="Password" />
                        <input className={style.input} type="password" placeholder="Confirm Password" />
                        <button className={style.input}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}