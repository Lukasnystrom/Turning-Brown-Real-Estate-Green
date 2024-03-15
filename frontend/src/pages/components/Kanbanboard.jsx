import React, { useState } from "react";
import { DndContext, DragOverlay } from '@dnd-kit/core';

import DroppableColumn from "./DroppableColumn";
import House from "./House";
import HouseDesign from "./HouseDesign";

export default function Kanbanboard({ ready, setReady }) {
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [activeId, setActiveId] = useState(null);

    const styles = {
        container: "flex flex-row h-4/5 w-4/5 justify-center"
    };

    return (
        <div className={styles.container}>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <DroppableColumn id="1" key="1" name="Ready">
                    {ready.map((buidling) => (
                        <House key={buidling.address} address={buidling.address} id={buidling.address} current={1} />
                    ))}
                </DroppableColumn>

                <DroppableColumn id="2" key="2" name="In Progress">
                    {inProgress.map((building) => (
                        <House key={building.address} address={building.address} id={building.address} current={2} />
                    ))}
                </DroppableColumn>

                <DroppableColumn id="3" key="3" name="Done">
                    {done.map((building) => (
                        <House key={building.address} address={building.address} id={building.address} current={3} />
                    ))}
                </DroppableColumn>
                <DragOverlay>
                    {activeId ? (
                        <HouseDesign address={activeId} />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const over = event.over.id;
        const address = event.active.id;
        const start = event.active.data.current;
        console.log(event);
        console.log(address, over, start);

        let building = {}

        if (start === 1) {
            building = ready.find((building) => building.address === address);
        }
        else if (start === 2) {
            building = inProgress.find((building) => building.address === address);
        }
        else if (start === 3) {
            building = done.find((building) => building.address === address);
        } else {
            console.log("Mega Error!");
        }

        if (over === '1' && start !== 1) {
            setReady((prevReady) => [...prevReady, building]);
            if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((building) => building.address !== address));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((building) => building.address !== address));
            }
        } else if (over === '2' && start !== 2) {
            setInProgress((prevInProgress) => [...prevInProgress, building]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((building) => building.address !== address));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((building) => building.address !== address));
            }
        } else if (over === '3' && start !== 3) {
            setDone((prevDone) => [...prevDone, building]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((building) => building.address !== address));
            } else if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((building) => building.address !== address));
            }
        }
        // if (over === '1' && start !== 1) {
        //     setReady((prevReady) => [...prevReady, name]);
        //     if (start === 2) {
        //         setInProgress((prevInProgress) => prevInProgress.filter((address) => address !== name));
        //     } else if (start === 3) {
        //         setDone((prevDone) => prevDone.filter((address) => address !== name));
        //     }
        // } else if (over === '2' && start !== 2) {
        //     setInProgress((prevInProgress) => [...prevInProgress, name]);
        //     if (start === 1) {
        //         setReady((prevReady) => prevReady.filter((address) => address !== name));
        //         console.log("Done");
        //     } else if (start === 3) {
        //         setDone((prevDone) => prevDone.filter((address) => address !== name));
        //     }
        // } else if (over === '3' && start !== 3) {
        //     setDone((prevDone) => [...prevDone, name]);
        //     if (start === 1) {
        //         setReady((prevReady) => prevReady.filter((address) => address !== name));
        //     } else if (start === 2) {
        //         setInProgress((prevInProgress) => prevInProgress.filter((address) => address !== name));
        //     }
        // }
        setActiveId(null);
    }
}