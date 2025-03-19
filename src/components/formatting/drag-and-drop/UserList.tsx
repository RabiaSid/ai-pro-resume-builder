
'use client'
import React, { useState } from "react";
import { User, users as initialUsers } from "@/components/formatting/drag-and-drop/userData";
import SortableUser from "@/components/formatting/drag-and-drop/SortableUser";

export default function UserList() {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (event: React.DragEvent<HTMLLIElement>, index: number) => {
        event.preventDefault();
        setHoverIndex(index);
    };

    const handleDrop = (index: number) => {
        if (draggedIndex === null) return;

        const updatedUsers = [...users];
        const [draggedItem] = updatedUsers.splice(draggedIndex, 1);
        updatedUsers.splice(index, 0, draggedItem);

        setUsers(updatedUsers);
        setDraggedIndex(null);
        setHoverIndex(null);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
        setHoverIndex(null);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Hold & Drag the boxes to rearrange the sections</h2>
            <ul className="bg-white shadow-md rounded-lg p-2 space-y-2">
                {users.map((user, index) => (
                    <li
                        key={user.id}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={() => handleDrop(index)}
                        onDragEnd={handleDragEnd}
                        className={`flex items-center border border-gray-300 rounded-lg py-2 px-4 transition-all duration-300 cursor-grab ${draggedIndex === index
                            ? "bg-blue-100 opacity-100 border-blue-500"
                            : hoverIndex === index
                                ? "bg-yellow-200 border-yellow-500"
                                : "bg-yellow-50"
                            }`}
                        style={{
                            // visibility: draggedIndex === index ? "hidden" : "visible", // Hide while dragging
                        }}
                    >
                        <span className="mr-4 text-gray-500 cursor-grab">::</span>
                        <SortableUser user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
