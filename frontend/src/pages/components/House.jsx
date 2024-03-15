import React from "react";
import { Link } from "react-router-dom";

import DraggableHouse from "./DraggableHouse";
import HouseDesign from "./HouseDesign";

export default function House(props) {
    return (
        <Link to={'/'}>
            <DraggableHouse id={props.id} current={props.current}>
                <HouseDesign address={props.address} />
            </DraggableHouse>
        </Link>
    )
}