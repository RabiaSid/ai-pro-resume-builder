"use client";

import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

const STORAGE_KEY = "dragAndDropItems";

const initialItems = [
    { id: "1", color: "border-red-400", name: "Red Box" },
    { id: "2", color: "border-orange-400", name: "Orange Box" },
    { id: "3", color: "border-blue-400", name: "Blue Box" },
    { id: "4", color: "border-cyan-400", name: "Cyan Box" },
    { id: "5", color: "border-red-400", name: "Small Red Box" },
    { id: "6", color: "border-green-400", name: "Green Box" },
    { id: "7", color: "border-rose-400", name: "Rose Box" },
    { id: "8", color: "border-purple-400", name: "Purple Box" },
];

const DragDropSection = () => {
    const [items, setItems] = useState(initialItems);

    // Load saved items from localStorage
    useEffect(() => {
        const savedItems = localStorage.getItem(STORAGE_KEY);
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    // Save items to localStorage on change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const newItems = [...items];
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);

        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg bg-white">
                <Droppable droppableId="droppable" direction="vertical">
                    {(provided) => (
                        <div
                            className="grid grid-cols-2 gap-4"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`flex items-center justify-center ${item.color} h-24 rounded-sm bg-gray-50 border`}
                                            style={{
                                                opacity: snapshot.isDragging ? 0.9 : 1,
                                                // transform: snapshot.isDragging ? "rotate(-2deg)" : "",
                                            }}
                                        >
                                            <p className="text-2xl text-gray-400">{item.name}</p>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default DragDropSection;
