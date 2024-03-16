import React from "react";

export default function BuildingImprovementDesign(props) {
    return (
        <div className="flex w-full h-20 p-4 justify-start items-center border-2 border-black bg-slate-100 rounded-lg overflow-clip">
            <h3 className="text-l italic">{props.name}</h3>
        </div>
    )
}