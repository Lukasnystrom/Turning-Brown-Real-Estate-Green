import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function DraggableHouse(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
        data: props.current
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    const styles = {
        button: "w-full mt-2 mb-2"
    }

    return (
        <button ref={setNodeRef} className={styles.button} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}