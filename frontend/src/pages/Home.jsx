import React, { useState, useEffect } from "react";
import { DndContext } from '@dnd-kit/core';

import Kanbanboard from "./components/Kanbanboard";

export default function Home(props) {
    const greatings = ["Good Morning", "Good Afternoon", "Good Evening"];
    const [greeting, setGreeting] = useState("");
    const styles = {
        container: "flex flex-wrap justify-center h-screen bg-gray-200",
        heading: "w-full mt-10 mb-4  text-5xl font-bold text-gray-700 text-center "
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
            <h1 className={styles.heading}>{greeting} {props.user}!</h1>
            <Kanbanboard />
        </div>
    );
}
