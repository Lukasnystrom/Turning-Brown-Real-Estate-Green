import React from "react";
import { Link } from "react-router-dom";

import DraggableItem from "./DraggableItem";
import HouseDesign from "./HouseDesign";

export default function House(props, current) {
    return (
        <Link to={`/home/:${props.id}`}>
            <DraggableItem id={props.id} current={current}>
                <HouseDesign name={props.address} />
            </DraggableItem>
        </Link>
    )
}