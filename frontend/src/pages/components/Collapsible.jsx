import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Collapsible(props) {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex flex-wrap w-full pt-2 pl-4 justify-start rounded-lg overflow-clip">
            <div className="flex flex-row justify-between items-center w-full h-fit">
                <h3 className="w-5/6 text-lg text-left italic">{props.name}</h3>
                <button className="h-full mr-4 bg-white rounded-lg" onClick={() => setOpen(!open) }>
                    {
                        open ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />
                    }
                </button>
            </div>
            <div className="w-full ml-4 pb-2">
                {open ? props.children : null}
            </div>
        </div>
    );
}