import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableHouse(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });

    const styles = {
        column: "w-1/4 m-4 p-4 bg-gray-400/75 rounded-lg overflow-y-auto overflow-x-hidden",
        heading: "m-4 text-2xl font-bold italic text-center"
    }

    return (
        <div ref={setNodeRef} className={`${styles.column} ${props.className}`}>
            <h2 className={styles.heading}>{props.name}</h2>
            {props.children}
        </div>
    );
}