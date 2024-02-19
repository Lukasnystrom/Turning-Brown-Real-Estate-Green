import React from "react";

import appartmentsImage from '../assets/appartments.jpg';

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            noMatch: false
        }

    }

    style = {
        input: "w-2/3 border-black border-2 p-2 m-3 rounded-xl",
        button: "w-1/3 bg-black text-white p-2 m-2 rounded-md"
    }

    handleAccountCreation = (event) => {
        event.preventDefault();
        console.log('Creating Account');
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log('Account Created');
    
    }

    handleDiffrentPassword = (event) => {
        const {name, value} = event.target;
        if (value !== this.state.password) {
            console.log('Passwords do not match');
            this.setState({noMatch: true});
        } else {
            console.log('Passwords match');
            this.setState({noMatch: false});
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {noMatch} = this.state;
        return (
            <div className="flex">
                <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${appartmentsImage})` }}></div>
                <div className="flex w-1/2 h-screen bg-white place-content-center">
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className=" mb-6 text-5xl font-bold italic text-center w-full">Create Account</h1>
                        <form className="flex flex-col w-4/5 items-center" onSubmit={this.handleAccountCreation}>
                            <input className={this.style.input} name="email" type="email" placeholder="Email" onChange={this.handleChange}/>
                            <input className={this.style.input} name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                            <input className={this.style.input} name="confirmPassword" type="password" placeholder="Confirm Password" onChange={this.handleDiffrentPassword}/>
                            {noMatch && <div className="text-red-500 italic">Passwords do not match!</div> }
                            <button className={this.style.input} type="submit">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}