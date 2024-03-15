import React, { useState, useEffect } from "react";

import Kanbanboard from "./components/Kanbanboard";

export default function Home(props) {
    const greatings = ["Good Morning", "Good Afternoon", "Good Evening"];
    const [greeting, setGreeting] = useState("");
    const styles = {
        container: "flex flex-wrap justify-center h-screen bg-gray-200",
        heading: "w-full mb-4 text-5xl font-bold text-gray-700 text-center "
    };

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        if (hours < 12) {
            setGreeting(greatings[0]);
        } else if (hours < 18) {
            setGreeting(greatings[1]);
        } else {
            setGreeting(greatings[2]);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className="flex flex-wrap w-1/6 h-full bg-white">
                <button className="w-full h-12 m-4 bg-[#192E43] text-white italic rounded-md">Register New Building</button>
            </div>
            <div className="flex flex-wrap w-5/6 h-screen justify-center items-center bg-gray-200">
                <div className="flex flex-wrap w-full justify-center items-center ">
                    <h1 className={styles.heading}>{greeting} {props.user}!</h1>
                </div>
                <Kanbanboard />
            </div>
        </div>
    );
}
