import React, { useState } from "react";
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor, MouseSensor, TouchSensor, KeyboardSensor } from '@dnd-kit/core';

import DroppableColumn from "./DroppableColumn";
import House from "./House";
import HouseDesign from "./HouseDesign";

export default function Kanbanboard({ renderElement, renderDesign, ready, inProgress, done, handleDragStart, handleDragEnd, activeId }) {

    const ItemRenderer = ({ items, renderItem, current }) => {
        return items.map(item =>
            <div key={item.id}>
                {renderItem(item, current)}
            </div>
        );
    };

    const styles = {
        container: "flex flex-row h-4/5 w-4/5 justify-center"
    };

    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 0.01
        }
    })
    const mouseSensor = useSensor(MouseSensor)
    const touchSensor = useSensor(TouchSensor)
    const keyboardSensor = useSensor(KeyboardSensor)

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
        pointerSensor
    )

    return (
        <div className={styles.container}>
            <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <DroppableColumn id="1" key="1" name="Ready">
                    <ItemRenderer items={ready} renderItem={renderElement} current={1} />
                </DroppableColumn>

                <DroppableColumn id="2" key="2" name="In Progress">
                    <ItemRenderer items={inProgress} renderItem={renderElement} current={2} />
                </DroppableColumn>

                <DroppableColumn id="3" key="3" name="Done">
                    <ItemRenderer items={done} renderItem={renderElement} current={3} />
                </DroppableColumn>
                <DragOverlay>
                    {activeId ? (
                        renderDesign({ name: activeId })
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );

}