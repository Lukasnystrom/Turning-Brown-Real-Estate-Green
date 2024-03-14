import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import DraggableHouse from "./DraggableHouse";

export default function House(props) {
    return (
        <Link to={'/'}>
            <DraggableHouse id={props.id} current={props.current}>
                <div className="flex w-full h-20 p-4 justify-start items-center bg-slate-100 rounded-lg">
                    <FontAwesomeIcon icon={faHouse} className="mr-5" />
                    <h3 className="text-xl italic">{props.address}</h3>
                </div>
            </DraggableHouse>
        </Link>
    )
}