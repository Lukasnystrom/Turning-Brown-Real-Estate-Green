import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Kanbanboard from "./components/Kanbanboard";
import BuildingImprovement from "./components/BuildingImprovement";
import BuildingImprovementDesign from "./components/BuildingImprovementDesign";

export default function Buildings() {
    const { id } = useParams();

    const [ready, setReady] = useState([{ id: 1, name: 'Test' }]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [activeId, setActiveId] = useState(null);



    return (
        <div className="h-screen w-full">
            <h1>Building {id}</h1>
            <Kanbanboard renderElement={BuildingImprovement} renderDesign={BuildingImprovementDesign} ready={ready} inProgress={inProgress} done={done} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} activeId={activeId}/>
        </div>
    )

    function handleDragStart(event) {
        const improvement = findImprovement(event);
        setActiveId(improvement.name);
    }

    function handleDragEnd(event) {
        let over = null;
        try {
            over = event.over.id;
        } catch {}
        const id = event.active.id;
        const start = event.active.data.current;

        const improvement = findImprovement(event);

        if (over === '1' && start !== 1) {
            setReady((prevReady) => [...prevReady, improvement]);
            if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((improvement) => improvement.id !== id));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((improvement) => improvement.id !== id));
            }
        } else if (over === '2' && start !== 2) {
            setInProgress((prevInProgress) => [...prevInProgress, improvement]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((improvement) => improvement.id !== id));
            } else if (start === 3) {
                setDone((prevDone) => prevDone.filter((improvement) => improvement.id !== id));
            }
        } else if (over === '3' && start !== 3) {
            setDone((prevDone) => [...prevDone, improvement]);
            if (start === 1) {
                setReady((prevReady) => prevReady.filter((improvement) => improvement.id !== id));
            } else if (start === 2) {
                setInProgress((prevInProgress) => prevInProgress.filter((improvement) => improvement.id !== id));
            }
        }
        setActiveId(null);
    }

    function findImprovement(event) {
        let improvement = {};
        if (event.active.data.current === 1) {
            improvement = ready.find((improvement) => improvement.id === event.active.id);
        }
        else if (event.active.data.current === 2) {
            improvement = inProgress.find((improvement) => improvement.id === event.active.id);
        }
        else if (event.active.data.current === 3) {
            improvement = done.find((improvement) => improvement.id === event.active.id);
        }
        return improvement;
    }

}