import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HouseDesign(props) {
    return (
        <div className="flex w-full h-20 p-4 justify-start items-center border-2 border-black bg-slate-100 rounded-lg overflow-clip">
            <FontAwesomeIcon icon={faHouse} className="mr-3" />
            <h3 className="text-l italic">{props.address}</h3>
        </div>
    );
}