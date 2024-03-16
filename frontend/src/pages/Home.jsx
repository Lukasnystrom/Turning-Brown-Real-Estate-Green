import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Kanbanboard from "./components/Kanbanboard";
import DashboardBackdrop from "../assets/dashboard-backdrop.jpg";
import {exempelBuilding1, exempelBuilding2, exempelBuilding3, exempelBuilding4, exempelBuilding5} from "./components/Example"
import House from "./components/House";
import HouseDesign from "./components/HouseDesign";

export default function Home(props) {
    const greatings = ["Good Morning", "Good Afternoon", "Good Evening"];
    const [greeting, setGreeting] = useState("");
    const [ready, setReady] = useState([exempelBuilding1, exempelBuilding2, exempelBuilding3, exempelBuilding4, exempelBuilding5]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buildingName, setBuildingName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    //Update this to get the ids from the backend
    const [ids, setIds] = useState([1, 2, 3, 4, 5]);
    const styles = {
        container: "flex flex-wrap justify-center h-screen bg-cover bg-center",
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
            //Change this to send the data to the backend and get the id from the backend
            const id = ids[ids.length - 1] + 1;
            setIds((prevIds) => [...prevIds, id]);
            setReady((prevReady) => [...prevReady, {
                id: id,
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
        <div className={styles.container} style={{ backgroundImage: `url(${DashboardBackdrop})` }}>
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
            <div className="flex flex-wrap w-1/6 h-ful bg-gray-700/50">
                <button onClick={() => setModalIsOpen(true)} className="w-full h-12 m-4 bg-[#192E43] text-white italic rounded-md">Register New Building</button>
            </div>
            <div className="flex flex-wrap w-5/6 h-screen justify-center items-center">
                <div className="flex flex-wrap w-full justify-center items-center ">
                    <h1 className={styles.heading}>{greeting} {props.user}!</h1>
                </div>
                <Kanbanboard renderElement={House} renderDesign={HouseDesign} ready={ready} inProgress={inProgress} done={done} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} activeId={activeId} />
            </div>
        </div>
    );

    function handleDragStart(event) {
        const building = findBuilding(event);
        
        setActiveId(building.address);
    }

    function handleDragEnd(event) {
        let over = null;
        try {
            over = event.over.id;
        } catch {}
        const id = event.active.id;
        const start = event.active.data.current;

        const building = findBuilding(event);

        if (over === '1' && start !== 1) {
            setReady((prevReady) => [...prevReady, building]);
            if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((building) => building.id !== id));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((building) => building.id !== id));
            }
        } else if (over === '2' && start !== 2) {
            setInProgress((prevInProgress) => [...prevInProgress, building]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((building) => building.id !== id));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((building) => building.id !== id));
            }
        } else if (over === '3' && start !== 3) {
            setDone((prevDone) => [...prevDone, building]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((building) => building.id !== id));
            } else if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((building) => building.id !== id));
            }
        }
        setActiveId(null);
    }
    function findBuilding(event) {
        let building = {};
        if (event.active.data.current === 1) {
            building = ready.find((building) => building.id === event.active.id);
        }
        else if (event.active.data.current === 2) {
            building = inProgress.find((building) => building.id === event.active.id);
        }
        else if (event.active.data.current === 3) {
            building = done.find((building) => building.id === event.active.id);
        } else {
            console.log("Mega Error!");
        }
        return building;
    }
}
