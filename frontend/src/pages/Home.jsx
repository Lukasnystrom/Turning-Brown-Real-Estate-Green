import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Kanbanboard from "./components/Kanbanboard";
import {exempelBuilding1, exempelBuilding2, exempelBuilding3, exempelBuilding4, exempelBuilding5} from "./components/Example"

export default function Home(props) {
    const greatings = ["Good Morning", "Good Afternoon", "Good Evening"];
    const [greeting, setGreeting] = useState("");
    const [ready, setReady] = useState([exempelBuilding1, exempelBuilding2, exempelBuilding3, exempelBuilding4, exempelBuilding5]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buildingName, setBuildingName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const styles = {
        container: "flex flex-wrap justify-center h-screen bg-gray-200",
        heading: "w-full mb-4 text-5xl font-bold text-gray-700 text-center ",
        overlayHeader: "w-full mb-4 text-2xl font-bold text-gray-700 text-center",
        overlayForm: "flex flex-col w-full justify-center items-center",
        overlayInput: "w-1/2 h-12 mb-4 p-2 border-2 border-gray-400 rounded-md",
        overlaySmallInput: "w-5/12 h-12 p-2 border-2 border-gray-400 rounded-md",
        overlayRegister: "w-1/2 h-12 my-4 p-2 bg-[#192E43] text-white italic rounded-md",
    };

    function registerBuilding() {
        setModalIsOpen(false);
        if (address !== "" && buildingName !== "" && city !== "" && zipCode !== "" && country !== "") {
            setReady((prevReady) => [...prevReady, {
                name: buildingName,
                address: address,
                zipCode: zipCode,
                city: city,
                country: country,
            }]);
        }
    }

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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    content: {
                        width: "50%",
                        height: "50%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    },
                }}>
                <h2 className={styles.overlayHeader}>Register a new Building</h2>
                <form className={styles.overlayForm} onSubmit={(event) => event.preventDefault()}>
                    <input className={styles.overlayInput} type="text" placeholder="Building Name" onChange={(event) => setBuildingName(event.target.value)}/>
                    <input className={styles.overlayInput} type="text" placeholder="Address" onChange={(event) => setAddress(event.target.value)}/>
                    <div className="flex flex-wrap justify-between w-1/2 h-12 mb-4">
                        <input className={styles.overlaySmallInput} type="text" placeholder="City" onChange={(event) => setCity(event.target.value)}/>
                        <input className={styles.overlaySmallInput} type="text" placeholder="Zip Code" onChange={(event) => setZipCode(event.target.value)}/>
                    </div>
                    <input className={styles.overlayInput} type="text" placeholder="Country" onChange={(event) => setCountry(event.target.value)}/>
                    <button type="button" className={styles.overlayRegister} onClick={registerBuilding}>Register</button>
                </form>
                <div>
                    <button type="button" className=" absolute top-5 right-10 w-7 h-7 border-black border-2 rounded-full" onClick={() => setModalIsOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </Modal>
            <div className="flex flex-wrap w-1/6 h-full bg-white">
                <button onClick={() => setModalIsOpen(true)} className="w-full h-12 m-4 bg-[#192E43] text-white italic rounded-md">Register New Building</button>
            </div>
            <div className="flex flex-wrap w-5/6 h-screen justify-center items-center bg-gray-200">
                <div className="flex flex-wrap w-full justify-center items-center ">
                    <h1 className={styles.heading}>{greeting} {props.user}!</h1>
                </div>
                <Kanbanboard ready={ready} setReady={setReady} />
            </div>
        </div>
    );
}
