import React, { useState } from "react";
import { DndContext } from '@dnd-kit/core';

import DroppableColumn from "./DroppableColumn";
import House from "./House";

export default function Kanbanboard() {
    const [ready, setReady] = useState(["Exempelgatan 1", "Exempelgatan 2", "Exempelgatan 3"]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    // const [parent, setParent] = useState('1');

    // const draggableMarkup = (
    //     <House address="Anundsvägen 32" />
    // );

    const styles = {
        container: "flex flex-row h-4/5 w-4/5 justify-center"
    };

    return (
        <div className={styles.container}>
            <DndContext onDragEnd={handleDragEnd}>
                <DroppableColumn id="1" key="1" name="Ready">
                    {ready.map((adress) => (
                        <House key={adress} address={adress} id={adress} current={1} />
                    ))}
                </DroppableColumn>

                <DroppableColumn id="2" key="2" name="In Progress">
                    {inProgress.map((adress) => (
                        <House key={adress} address={adress} id={adress} current={2} />
                    ))}
                </DroppableColumn>

                <DroppableColumn id="3" key="3" name="Done">
                    {done.map((adress) => (
                        <House key={adress} address={adress} id={adress} current={3} />
                    ))}
                </DroppableColumn>
            </DndContext>
        </div>
    );

    function handleDragEnd(event) {
        const over = event.over.id;
        const name = event.active.id;
        const start = event.active.data.current;
        console.log(event);
        console.log(name, over, start);

        if (over === '1' && start !== 1) {
            setReady((prevReady) => [...prevReady, name]);
            if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((address) => address !== name));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((address) => address !== name));
            }
        } else if (over === '2' && start !== 2) {
            setInProgress((prevInProgress) => [...prevInProgress, name]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((address) => address !== name));
                console.log("Done");
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((address) => address !== name));
            }
        } else if (over === '3' && start !== 3) {
            setDone((prevDone) => [...prevDone, name]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((address) => address !== name));
            } else if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((address) => address !== name));
            }
        }
    }
}