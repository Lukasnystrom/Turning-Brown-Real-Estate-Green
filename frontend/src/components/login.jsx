import React from 'react'
import loginImg from '../assets/loginimg.jpg'

export default function Login() {
    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] bg-slate-50'>
                <div className='w-full h-[550px] hidden md:block'>
                    <img className='w-full h-full' src={loginImg} alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form>
                        <h2 className='text-4xl font-bold text-center mb-8'>BRAND.</h2>
                        <div>
                            <input className='border p-2 mr-2' type="text" placeholder='Username' />
                            <input className='border p-2' type="password" placeholder='Password' />
                        </div>
                        <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
                        <button className='text-center'>Forgot Username or Password?</button>
                    </form>
                    <button className='text-center'>Sign Up</button>
                </div>
            </div>
        </div>
      )
}