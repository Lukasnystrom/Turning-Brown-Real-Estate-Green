import React from "react";

import DraggableItem from "./DraggableItem";
import BuildingImprovementDesign from "./BuildingImprovementDesign";

export default function BuildingImprovement(props, current) {
    return (
        <DraggableItem id={props.id} current={current}>
            <BuildingImprovementDesign name={props.name}/>
        </DraggableItem>
    )
}