import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableHouse(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    // const style = {
    //     color: isOver ? 'green' : undefined,
    // };

    const styles = {
        column: "w-1/4 m-4 p-4 bg-gray-300 rounded-lg",
        heading: "m-4 text-2xl font-bold italic text-center"
    }

    return (
        <div ref={setNodeRef} className={styles.column}>
            <h2 className={styles.heading}>{props.name}</h2>
            {props.children}
        </div>
    );
}