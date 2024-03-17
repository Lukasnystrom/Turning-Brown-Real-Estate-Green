import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Kanbanboard from "./components/Kanbanboard";
import BuildingImprovement from "./components/BuildingImprovement";
import BuildingImprovementDesign from "./components/BuildingImprovementDesign";
import Collapsible from "./components/Collapsible";
import DownloadFile from "./components/DownloadFile";

import DashboardBackdrop from "../assets/dashboard-backdrop.jpg";

export default function Buildings() {
    const { id } = useParams();

    const [ready, setReady] = useState([{ id: 1, name: 'Byta Fönster' }]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [activeId, setActiveId] = useState(null);



    return (
        <div className="flex flex-wrap h-screen w-full">

            <div className="w-1/4 h-screen border-r-2 border-b-2 border-black">
                <h2 className="p-4 text-2xl font-bold italic text-center bg-white">File Browser</h2>
                <div className="w-full border-t-2 border-black" />
                <div className="w-full h-full overflow-y-auto">
                    <Collapsible name="Building Information">
                        <Collapsible name="Sub Folder Building">
                            <DownloadFile name="test.pdf" file="#" />
                        </Collapsible>
                    </Collapsible>
                    <Collapsible name="Tax Information">
                        <Collapsible name="Sub Folder Tax">
                            <DownloadFile name="test.pdf" file="#" />
                        </Collapsible>
                    </Collapsible>
                    <Collapsible name="Liabilities">
                        <Collapsible name="Sub Folder Liabilities">
                            <DownloadFile name="test.pdf" file="#" />
                        </Collapsible>
                    </Collapsible>
                </div>
            </div>
            <div className="flex flex-wrap w-3/4 h-full justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${DashboardBackdrop})` }}>
                <h1 className="w-full m-5 text-3xl italic text-center">Building {id}</h1>
                <Kanbanboard renderElement={BuildingImprovement} renderDesign={BuildingImprovementDesign} ready={ready} inProgress={inProgress} done={done} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} activeId={activeId} />
            </div>
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
        } catch { }
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